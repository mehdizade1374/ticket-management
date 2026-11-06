
import './App.css'
import { Link } from 'react-router-dom'

function App() {

  const products = [
    {
      id: 1,
      title: "هدفون بی سیم",
      price: "۱,۲۰۰,۰۰۰",
      image: "https://placehold.co/400x300?text=Headphone"
    },
    {
      id: 2,
      title: "ساعت هوشمند",
      price: "۲,۵۰۰,۰۰۰",
      image: "https://placehold.co/400x300?text=Watch"
    },
    {
      id: 3,
      title: "کیف دستی",
      price: "۸۵۰,۰۰۰",
      image: "https://placehold.co/400x300?text=Bag"
    },
    {
      id: 4,
      title: "کفش اسپرت",
      price: "۱,۷۰۰,۰۰۰",
      image: "https://placehold.co/400x300?text=Shoes"
    }
  ]

  const categories = [
    "همه محصولات",
    "لوازم دیجیتال",
    "پوشاک",
    "اکسسوری",
    "خانه و آشپزخانه"
  ]

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col md:flex-row justify-between items-center gap-5">

          <h1 className="text-2xl font-bold text-blue-700">
            SHOPZONE
          </h1>

          <nav className="flex gap-6 text-gray-600">
            <a href="#" className="hover:text-blue-600">
              خانه
            </a>

            <a href="#products" className="hover:text-blue-600">
              محصولات
            </a>

            <a href="#about" className="hover:text-blue-600">
              درباره ما
            </a>
          </nav>

          <div className="flex gap-3">

            <Link
              to="/log"
              className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50"
            >
              ورود
            </Link>

            <Link
              to="/log"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              ثبت نام
            </Link>

          </div>

        </div>
      </header>

      {/* Banner */}
      <section className="max-w-6xl mx-auto px-5 mt-10">

        <div className="bg-blue-700 rounded-3xl p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="text-white">

            <p className="text-blue-200 mb-4">
              خریدی آسان و مطمئن
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-relaxed">
              بهترین محصولات
              <br />
              برای بهترین انتخاب
            </h2>

            <p className="mt-5 text-blue-100">
              تنوع محصولات با مناسب‌ترین قیمت
            </p>

            <Link
              to="/log"
              className="inline-block mt-7 bg-white text-blue-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-100"
            >
              شروع خرید
            </Link>

          </div>

          <div className="w-full md:w-80 h-56 bg-blue-100 rounded-2xl flex items-center justify-center">

            <span className="text-3xl font-bold text-blue-700">
              SHOPZONE
            </span>

          </div>

        </div>

      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-5 mt-14">

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          دسته بندی محصولات
        </h2>

        <div className="flex flex-wrap gap-3">

          {categories.map((item, index) => (

            <button
              key={index}
              className="bg-white border border-gray-200 px-5 py-3 rounded-xl text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
            >
              {item}
            </button>

          ))}

        </div>

      </section>

      {/* Products */}
      <section
        id="products"
        className="max-w-6xl mx-auto px-5 mt-14 mb-16"
      >

        <div className="flex justify-between items-center mb-7">

          <h2 className="text-2xl font-bold text-gray-800">
            محصولات پرفروش
          </h2>

          <Link
            to="/log"
            className="text-blue-600 hover:text-blue-800"
          >
            مشاهده همه
          </Link>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {products.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition"
            >

              <div className="bg-gray-100 rounded-xl h-40 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

              </div>

              <h3 className="font-bold text-gray-800 mt-5">
                {item.title}
              </h3>

              <p className="text-blue-600 font-bold mt-3">
                {item.price} تومان
              </p>

              <Link
                to="/log"
                className="block text-center bg-blue-600 text-white py-2 rounded-lg mt-5 hover:bg-blue-700"
              >
                خرید محصول
              </Link>

            </div>

          ))}

        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="bg-white py-12 border-t border-gray-200"
      >

        <div className="max-w-6xl mx-auto px-5 text-center">

          <h2 className="text-2xl font-bold text-gray-800">
            درباره فروشگاه ما
          </h2>

          <p className="text-gray-500 mt-4 leading-8 max-w-2xl mx-auto">
            ما تلاش می‌کنیم تجربه‌ای آسان و مطمئن از خرید اینترنتی
            برای شما فراهم کنیم. کیفیت محصولات و رضایت مشتری
            اولویت اصلی ماست.
          </p>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">

        <h2 className="font-bold text-xl">
          SHOPZONE
        </h2>

        <p className="text-gray-400 mt-3 text-sm">
          تجربه یک خرید آسان و مطمئن
        </p>

        <p className="text-gray-500 text-xs mt-5">
          تمام حقوق این فروشگاه محفوظ است.
        </p>

      </footer>

    </div>
  )
}

export default App;