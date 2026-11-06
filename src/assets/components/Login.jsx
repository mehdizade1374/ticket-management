import { useContext, useEffect, useState } from "react";
import { usercontex } from "./Ccontex";
import { useNavigate } from "react-router-dom";

function Login(){
     const{setuser}=useContext(usercontex)
     const[data,setdata]=useState(null);
     const[username,setusername]=useState('');
     const[password,setpassword]=useState('');
     const[error,seterror]=useState([]);
     const[massege,setmassege]=useState('');
     const navigate=useNavigate();
     const [loading, setloading] = useState(true);
     const [role, setrole] = useState('');

useEffect(() => {
  fetch('/api/tickets-data.json')
    .then(res => res.json())
    .then(api => {
      setdata(api);
    })
    .catch(() => {
      setmassege("دریافت اطلاعات ناموفق بود");
    })
    .finally(() => {
      setloading(false);
    });
}, []);
console.log(data)

    function handlersubmit(e){

          e.preventDefault();

  if (loading || !data) {
    setmassege("لطفاً منتظر دریافت اطلاعات باشید");
    return;
  }

  const newerror = {};

  if (!username.trim()) {
    newerror.username = "نام کاربری را وارد کنید";
  } else if (username.trim().length < 2) {
    newerror.username = "نام کاربری کوتاه است";
  } else if (username.trim().length > 25) {
    newerror.username = "نام کاربری طولانی است";
  }

  if (!password.trim()) {
    newerror.password = "ایمیل را وارد کنید";
  }

  if (!role) {
    newerror.role = "لطفاً نقش خود را انتخاب کنید";
  }

  seterror(newerror);
  setmassege('');

  if (Object.keys(newerror).length > 0) {
    return;
  }

  const userfind = data.users.find(item =>
    item.name === username.trim() &&
    item.email === password.trim() &&
    item.role === role
  );

  if (userfind) {
    setuser(userfind);
    navigate("/user");
  } else {
    setmassege("نام کاربری، ایمیل یا نقش اشتباه است");
  }}



    return(

       <>
       
        <div dir="rtl" className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

      <div className="bg-white w-full max-w-sm p-8 rounded-xl shadow-md">

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          ورود به پورتال
        </h2>

        <form className="space-y-5" onSubmit={handlersubmit} >

          <div>
            <label className="block mb-2 text-sm text-gray-700">
              نام کاربری
            </label>
            <input
              type="text"
              placeholder="نام کاربری"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
               onChange={(e)=>setusername(e.target.value) }
            />
             {
              error.username &&(
                 <p className="text-red-700 text-sm">
                 {error.username}
                 </p>
                  )
            }
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-700">
              ایمیل
            </label>
            <input
              type="password"
              placeholder="رمز عبور"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
               onChange={(e)=>setpassword(e.target.value) }
            />
             {
              error.password && (
                 <p className="text-red-700 text-sm">
                   {error.password}
                 </p>
              )
            }
          </div>
                      <div>
              <div className="flex flex-row items-center gap-5">
            
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    onChange={(e) => setrole(e.target.value)}
                  />
                  مدیر
                </label>
            
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="customer"
                    onChange={(e) => setrole(e.target.value)}
                  />
                  مشتری
                </label>
            
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="support"
                    onChange={(e) => setrole(e.target.value)}
                  />
                  پشتیبانی
                </label>
            
              </div>
            
              {error.role && (
                <p className="text-red-600 text-sm mt-2">
                  {error.role}
                </p>
              )}
            </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            ورود
          </button>
             {
                massege && (
                  <p className="text-sm font-bold text-red-500">
                    {massege}
                  </p>
                )
               }
        </form>
      </div>
    </div>
       
       </>
       
    )
}

export default Login;