import { useContext, useEffect, useReducer, useState } from "react";
import { usercontex } from "./Ccontex";
import axios from "axios";
import { init, TiketCom } from "./TiketCom";
import AddTicket from "./AddTicket";

function UserDon() {

    const[state, dispatch]=useReducer(TiketCom,init);
    const { user } = useContext(usercontex);
// فیلتز کردن تیمت ها بر اساس یوزر
    const myTickets = state.tickets.filter(
   (item) => item.userId === user?.id
    );
      // نمایش تعداد تیکت ها
    const allTikets= myTickets.length;
    const openTikets=myTickets.filter((item)=>item.status==='OPEN').length;
    const closeTikets=myTickets.filter((item)=>item.status==='CLOSED').length;
    const progersTikets=myTickets.filter((item)=>item.status==='IN_PROGRESS').length;



    const[showALLticket,setshowALLticket]=useState(false)
    const[showticket,setshowticket]=useState(false)
    const[mystatus,setmystatus]=useState('')
    const[tiketbg,settiketbg]=useState('')

        useEffect(()=>{
            axios.get('/api/tickets-data.json')
                .then(res => {
                    // setuser(res.data);
        dispatch({
          type: "SETICKETS",
          payload: res.data.tickets,
        });
        // console.log('tikets:' , res.data.tickets)
      })
      .catch(err => console.log(err));
  }, []);
   
  if (!user) {
  return <p>لطفاً ابتدا وارد حساب کاربری شوید.</p>;
}

return  (
    <>
  <div dir="rtl" className="h-[60vh] bg-gray-100 p-6">

  {/* اطلاعات کاربر */}
  <div className="bg-white p-6 m-5 rounded-xl shadow-md flex items-center gap-4 max-w-md mx-auto">

    <img
      src={user?.avatar}
      alt="avatar"
      className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
    />

    <div>
      <h1 className="text-lg font-bold text-gray-800">
        {user?.name}
      </h1>

      <p className="text-sm text-gray-500 mt-1">
        {user?.email}
      </p>

      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md mt-2 inline-block">
        {user?.role}
      </span>
    </div>

  </div>
 
              {/* نمایش امار تیکت ها  */}
 
 <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">

    <div className="bg-blue-100 p-5 rounded-xl text-center">
      <p className="text-gray-600">کل تیکت‌ها</p>
      <h3 className="text-3xl font-bold text-blue-700 mt-2">
        {allTikets}
      </h3>
         
       <button
            onClick={()=> {setshowALLticket(!showALLticket)
                           setshowticket(false) 
                           settiketbg('blue')       
            }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
       >
    نمایش تیکت ها
       </button>
    </div>

    <div className="bg-yellow-100 p-5 rounded-xl text-center">
      <p className="text-gray-600">تیکت‌های باز</p>
      <h3 className="text-3xl font-bold text-yellow-700 mt-2">
        {openTikets}
      </h3>
         <button
            onClick={()=> 
               { setshowticket(!showticket)
                setshowALLticket(false)
                settiketbg('yellow') 
                 setmystatus('OPEN')}
               
            }
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
       >
    نمایش تیکت ها
       </button>
    </div>

    <div className="bg-green-100 p-5 rounded-xl text-center">
      <p className="text-gray-600">تیکت‌های بسته</p>
      <h3 className="text-3xl font-bold text-green-700 mt-2">
        {closeTikets}
      </h3>
         <button
            onClick={()=>  {setshowticket(!showticket)
                setshowALLticket(false)
                settiketbg('green') 
                 setmystatus('CLOSED')}}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
       >
    نمایش تیکت ها
       </button>
    </div>

    <div className="bg-red-100 p-5 rounded-xl text-center">
      <p className="text-gray-600">تیکت های در حال بررسی</p>
      <h3 className="text-3xl font-bold text-green-700 mt-2">
        {progersTikets}
      </h3>
         <button
            onClick={()=> { setshowticket(!showticket)
                setshowALLticket(false)
                settiketbg('red') 
                 setmystatus('IN_PROGRESS')}
            }
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
       >
 نمایش تیکت ها
       </button>
    </div>

  </div>
</div>
  
{
    showALLticket &&(
        <div>
                    <div  className=" p-4 rounded-xl mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 
                  bg-gray-100 p-5 rounded-xl text-center">
                       <h3 className="text-xl font-bold text-gray-800">عنوان</h3>

                       <p className="text-xl font-bold text-gray-800">توضیحات</p>
                  
                       <p className="text-xl font-bold text-gray-800">وضعیت</p>
                  </div>
            {
                myTickets.map((item)=>
                    
                    <div  key={item.id} className={`p-4 rounded-xl mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 
                  bg-${tiketbg}-100 p-5 rounded-xl text-center`}>
                       <h3>{item.title}</h3>

                       <p>{item.description}</p>
                  
                       <p>{item.status}</p>
                  </div>
                  
                )
            }
        </div>
    )
}


{/* نمایش تیکت های فیلتر شده */}

{
    showticket &&(
        <div>
                    <div  className=" p-4 rounded-xl mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 
                  bg-gray-100 p-5 rounded-xl text-center">
                       <h3 className="text-xl font-bold text-gray-800">عنوان</h3>

                       <p className="text-xl font-bold text-gray-800">توضیحات</p>
                  
                       <p className="text-xl font-bold text-gray-800">وضعیت</p>
                  </div>
            {
                myTickets.filter((item)=>item.status===mystatus).map((item)=>
                    
                    <div  key={item.id} className= {`p-4 rounded-xl mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 
                  bg-${tiketbg}-100 p-5 rounded-xl text-center`}>
                       <h3>{item.title}</h3>

                       <p>{item.description}</p>
                  
                       <p>{item.status}</p>
                  </div>
                  
                )
            }
        </div>
    )
}
  <AddTicket dispatch={dispatch} user={user} />
</>
);
}

export default UserDon;
