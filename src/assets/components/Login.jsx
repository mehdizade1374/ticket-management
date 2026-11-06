
import { useContext, useEffect, useState } from "react";
import { usercontex } from "./Ccontex";
import { useNavigate } from "react-router-dom";

function Login() {
  const { setuser } = useContext(usercontex);
  const [data, setdata] = useState(null);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState([]);
  const [massege, setmassege] = useState("");
  const navigate = useNavigate();
  const [loading, setloading] = useState(true);
  const [role, setrole] = useState("");

  useEffect(() => {
    fetch("/api/tickets-data.json")
      .then((res) => res.json())
      .then((api) => {
        setdata(api);
         console.log(api)
      })
      .catch(() => {
        setmassege("دریافت اطلاعات ناموفق بود");
      })
      .finally(() => {
        setloading(false);
      });
  }, []);
  
  function handlersubmit(e) {
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
    setmassege("");

    if (Object.keys(newerror).length > 0) {
      return;
    }

    const userfind = data.users.find(
      (item) =>
        item.name === username.trim() &&
        item.email === password.trim() &&
        item.role === role
    );

    if (userfind) {
      setuser(userfind);
      navigate("/user");
    } else {
      setmassege("نام کاربری، ایمیل یا نقش اشتباه است");
    }
  }

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#F8F6F1] flex items-center justify-center p-5"
    >
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-wider text-[#655D53]">
            SHOP<span className="text-[#A99D8C]">ZONE</span>
          </h1>
          <p className="text-sm text-[#A99D8C] mt-3">
            خوش آمدید
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-[#FDFCF9] border border-[#EAE5DC] rounded-2xl p-7 sm:p-9 shadow-sm">

          <h2 className="text-2xl font-semibold text-[#655D53] mb-2">
            ورود به پورتال
          </h2>

          <p className="text-sm text-[#A99D8C] mb-8">
            لطفاً اطلاعات حساب خود را وارد کنید.
          </p>

          <form className="space-y-5" onSubmit={handlersubmit}>

            {/* Username */}
            <div>
              <label className="block mb-2 text-sm text-[#655D53]">
                نام کاربری
              </label>

              <input
                type="text"
                placeholder="نام کاربری"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                className="w-full bg-[#F8F6F1] border border-[#E5DED3] rounded-xl px-4 py-3 text-sm text-[#655D53] outline-none transition focus:border-[#A99D8C] focus:ring-2 focus:ring-[#A99D8C]/10"
              />

              {error.username && (
                <p className="text-red-500 text-xs mt-2">
                  {error.username}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm text-[#655D53]">
                ایمیل
              </label>

              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="w-full bg-[#F8F6F1] border border-[#E5DED3] rounded-xl px-4 py-3 text-sm text-[#655D53] outline-none transition focus:border-[#A99D8C] focus:ring-2 focus:ring-[#A99D8C]/10"
              />

              {error.password && (
                <p className="text-red-500 text-xs mt-2">
                  {error.password}
                </p>
              )}
            </div>

            {/* Role */}
            <div>
              <label className="block mb-3 text-sm text-[#655D53]">
                ورود به عنوان
              </label>

              <div className="grid grid-cols-3 gap-2">

                {[
                  { value: "admin", label: "مدیر" },
                  { value: "customer", label: "مشتری" },
                  { value: "support", label: "پشتیبانی" },
                ].map((item) => (
                  <label
                    key={item.value}
                    className={`flex items-center justify-center gap-2 rounded-xl border p-3 text-xs cursor-pointer transition ${
                      role === item.value
                        ? "border-[#A99D8C] bg-[#F0EBE2] text-[#655D53]"
                        : "border-[#E5DED3] text-[#817668] hover:bg-[#F8F6F1]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={item.value}
                      checked={role === item.value}
                      onChange={(e) => setrole(e.target.value)}
                      className="accent-[#817668]"
                    />
                    {item.label}
                  </label>
                ))}

              </div>

              {error.role && (
                <p className="text-red-500 text-xs mt-2">
                  {error.role}
                </p>
              )}
            </div>

            {/* Message */}
            {massege && (
              <p className="text-sm text-red-500 text-center">
                {massege}
              </p>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#817668] text-white py-3.5 rounded-xl text-sm transition hover:bg-[#655D53] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "در حال دریافت اطلاعات..." : "ورود"}
            </button>

          </form>
        </div>

        <p className="text-center text-xs text-[#A99D8C] mt-6">
          © 2026 SHOPZONE
        </p>

      </div>
    </div>
  );
}

export default Login;
