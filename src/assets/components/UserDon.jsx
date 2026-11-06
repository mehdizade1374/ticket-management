
import { useContext, useEffect, useReducer, useState } from "react";
import { usercontex } from "./Ccontex";
import axios from "axios";
import { init, TiketCom } from "./TiketCom";
import AddTicket from "./AddTicket";

function UserDon() {

  const [state, dispatch] = useReducer(TiketCom, init);
  const { user } = useContext(usercontex);

  const myTickets = state.tickets.filter(
    (item) => item.userId === user?.id
  );

  const allTikets = myTickets.length;
  const openTikets = myTickets.filter((item) => item.status === 'OPEN').length;
  const closeTikets = myTickets.filter((item) => item.status === 'CLOSED').length;
  const progersTikets = myTickets.filter((item) => item.status === 'IN_PROGRESS').length;

  const [showALLticket, setshowALLticket] = useState(false);
  const [showticket, setshowticket] = useState(false);
  const [mystatus, setmystatus] = useState('');
  const [tiketbg, settiketbg] = useState('');

  useEffect(() => {
    axios.get('/api/tickets-data.json')
      .then(res => {
        dispatch({
          type: "SETICKETS",
          payload: res.data.tickets,
        });
      })
      .catch(err => console.log(err));
  }, []);

  if (!user) {
    return <p>لطفاً ابتدا وارد حساب کاربری شوید.</p>;
  }

  return (
    <>
      <div dir="rtl" className="min-h-screen bg-[#F8F6F1]-50 px-5 py-10">

        {/* اطلاعات کاربر */}
        <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm flex items-center gap-5 max-w-md mx-auto mb-10">

          <img
            src={user?.avatar}
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover border-2 border-blue-200"
          />

          <div>
            <h1 className="text-lg font-bold text-gray-800">
              {user?.name}
            </h1>

            <p className="text-sm text-gray-400 mt-2">
              {user?.email}
            </p>

            <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full mt-3 inline-block">
              {user?.role}
            </span>
          </div>

        </div>

        {/* نمایش آمار تیکت ها */}
        <div className="max-w-6xl mx-auto">

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800">
              داشبورد کاربری
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              خلاصه وضعیت تیکت‌های شما
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* کل تیکت ها */}
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl text-center transition hover:-translate-y-1 hover:shadow-md">
              <p className="text-sm text-gray-600">کل تیکت‌ها</p>

              <h3 className="text-4xl font-bold text-blue-700 mt-4 mb-5">
                {allTikets}
              </h3>

              <button
                onClick={() => {
                  setshowALLticket(!showALLticket);
                  setshowticket(false);
                  settiketbg('blue');
                }}
                className="bg-blue-600 text-white text-sm px-5 py-2.5 rounded-lg hover:bg-blue-700 transition"
              >
                نمایش تیکت ها
              </button>
            </div>

            {/* تیکت های باز */}
            <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-2xl text-center transition hover:-translate-y-1 hover:shadow-md">
              <p className="text-sm text-gray-600">تیکت‌های باز</p>

              <h3 className="text-4xl font-bold text-yellow-700 mt-4 mb-5">
                {openTikets}
              </h3>

              <button
                onClick={() => {
                  setshowticket(!showticket);
                  setshowALLticket(false);
                  settiketbg('yellow');
                  setmystatus('OPEN');
                }}
                className="bg-yellow-500 text-white text-sm px-5 py-2.5 rounded-lg hover:bg-yellow-600 transition"
              >
                نمایش تیکت ها
              </button>
            </div>

            {/* تیکت های بسته */}
            <div className="bg-green-50 border border-green-100 p-6 rounded-2xl text-center transition hover:-translate-y-1 hover:shadow-md">
              <p className="text-sm text-gray-600">تیکت‌های بسته</p>

              <h3 className="text-4xl font-bold text-green-700 mt-4 mb-5">
                {closeTikets}
              </h3>

              <button
                onClick={() => {
                  setshowticket(!showticket);
                  setshowALLticket(false);
                  settiketbg('green');
                  setmystatus('CLOSED');
                }}
                className="bg-green-600 text-white text-sm px-5 py-2.5 rounded-lg hover:bg-green-700 transition"
              >
                نمایش تیکت ها
              </button>
            </div>

            {/* تیکت های در حال بررسی */}
            <div className="bg-red-50 border border-red-100 p-6 rounded-2xl text-center transition hover:-translate-y-1 hover:shadow-md">
              <p className="text-sm text-gray-600">تیکت های در حال بررسی</p>

              <h3 className="text-4xl font-bold text-red-700 mt-4 mb-5">
                {progersTikets}
              </h3>

              <button
                onClick={() => {
                  setshowticket(!showticket);
                  setshowALLticket(false);
                  settiketbg('red');
                  setmystatus('IN_PROGRESS');
                }}
                className="bg-red-600 text-white text-sm px-5 py-2.5 rounded-lg hover:bg-red-700 transition"
              >
                نمایش تیکت ها
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* نمایش همه تیکت ها */}
      {showALLticket && (
        <div className="max-w-6xl mx-auto px-5 py-6">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-gray-100 p-5 rounded-xl text-center font-bold text-gray-700">
            <h3>عنوان</h3>
            <p>توضیحات</p>
            <p>وضعیت</p>
          </div>

          {myTickets.map((item) => (
            <div
              key={item.id}
              className={`p-5 rounded-xl mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-${tiketbg}-100 text-center items-center text-gray-700`}
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm leading-7">{item.description}</p>
              <p className="text-sm font-medium">{item.status}</p>
            </div>
          ))}

        </div>
      )}

      {/* نمایش تیکت های فیلتر شده */}
      {showticket && (
        <div className="max-w-6xl mx-auto px-5 py-6">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-gray-100 p-5 rounded-xl text-center font-bold text-gray-700">
            <h3>عنوان</h3>
            <p>توضیحات</p>
            <p>وضعیت</p>
          </div>

          {myTickets.filter((item) => item.status === mystatus).map((item) => (
            <div
              key={item.id}
              className={`p-5 rounded-xl mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-${tiketbg}-100 text-center items-center text-gray-700`}
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm leading-7">{item.description}</p>
              <p className="text-sm font-medium">{item.status}</p>
            </div>
          ))}

        </div>
      )}

      <AddTicket dispatch={dispatch} user={user} />
    </>
  );
}

export default UserDon;
