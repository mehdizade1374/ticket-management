
import "./App.css";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "هدفون بی سیم",
    price: "۱,۲۰۰,۰۰۰ تومان",
    image: "https://bbadil.com/wp-content/uploads/2025/09/%D9%87%D8%AF%D9%81%D9%88%D9%86-%D8%A8%D9%84%D9%88%D8%AA%D9%88%D8%AB-%D8%A7%DB%8C%D8%B3-%D9%81%D8%B3%D8%AA-ACEFAST-H9-ANC-Wireless-Headset-02.webp",
  },
  {
    id: 2,
    title: "ساعت هوشمند",
    price: "۲,۵۰۰,۰۰۰ تومان",
    image: "https://www.digikala.com/mag/wp-content/uploads/2023/04/Talk-Smartwatches.jpg",
  },
  {
    id: 3,
    title: "کیف دستی",
    price: "۸۵۰,۰۰۰ تومان",
    image: "https://cdnfa.com/mahbanooo/27dd/files/14986710.jpeg",
  },
  {
    id: 4,
    title: "کفش اسپرت",
    price: "۱,۷۰۰,۰۰۰ تومان",
    image: "https://dkstatics-public.digikala.com/digikala-products/7453626dc314b06cea41b0964719906ab753512a_1769947737.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_80/format,webp",
  },
];

const categories = [
  "همه محصولات",
  "دیجیتال",
  "پوشاک",
  "اکسسوری",
  "خانه و آشپزخانه",
];

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#faf9f6] text-[#292929]">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#eae7e1] bg-[#faf9f6]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link to="/" className="text-2xl font-bold tracking-wider">
            SHOP<span className="text-[#a58b6a]">ZONE</span>
          </Link>

          <nav className="hidden items-center gap-9 text-sm text-gray-500 md:flex">
            <Link to="/" className="transition hover:text-[#a58b6a]">
              صفحه اصلی
            </Link>
            <a href="#products" className="transition hover:text-[#a58b6a]">
              محصولات
            </a>
            <a href="#about" className="transition hover:text-[#a58b6a]">
              درباره ما
            </a>
          </nav>

          <div className="flex items-center gap-3 text-sm">
            <Link
              to="/log"
              className="rounded-full border border-[#ded8ce] px-5 py-2.5 transition hover:bg-[#292929] hover:text-white"
            >
              ورود
            </Link>

            <Link
              to="/log"
              className="hidden rounded-full bg-[#292929] px-5 py-2.5 text-white transition hover:bg-[#a58b6a] sm:block"
            >
              ثبت نام
            </Link>
          </div>

        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">

            <div>
              <span className="mb-5 inline-block text-xs tracking-[3px] text-[#a58b6a]">
                SHOP THE NEW COLLECTION
              </span>

              <h1 className="max-w-lg text-4xl font-semibold leading-[1.8] md:text-6xl">
                انتخابی ساده،
                <span className="block text-[#a58b6a]">
                  برای سلیقه خاص تو
                </span>
              </h1>

              <p className="mt-5 max-w-md text-sm leading-8 text-gray-500">
                مجموعه‌ای از محصولات کاربردی و زیبا برای تجربه یک خرید متفاوت.
              </p>

              <Link
                to="/log"
                className="mt-8 inline-flex rounded-full bg-[#292929] px-8 py-3.5 text-sm text-white transition hover:bg-[#a58b6a]"
              >
                مشاهده محصولات
                <span className="mr-3">←</span>
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://placehold.co/900x700/ece7df/756b5e?text=SHOPZONE"
                alt="Shopzone collection"
                className="h-[320px] w-full rounded-2xl object-cover md:h-[440px]"
              />

              <div className="absolute bottom-5 right-5 rounded-xl bg-white/90 px-5 py-4 backdrop-blur">
                <p className="text-xs text-gray-500">تجربه خرید متفاوت</p>
                <p className="mt-1 text-sm font-semibold">زیبایی در سادگی است</p>
              </div>
            </div>

          </div>
        </section>

        {/* Categories */}
        <section className="border-y border-[#eae7e1] bg-white py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-8 text-center">
              <p className="text-xs tracking-widest text-[#a58b6a]">
                CATEGORIES
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                دسته بندی محصولات
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`rounded-full border px-6 py-3 text-sm transition ${
                    index === 0
                      ? "border-[#292929] bg-[#292929] text-white"
                      : "border-[#e8e4dc] bg-white text-gray-600 hover:border-[#a58b6a] hover:text-[#a58b6a]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs tracking-widest text-[#a58b6a]">
                OUR PRODUCTS
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                محصولات منتخب
              </h2>
            </div>

            <span className="text-xs text-gray-400">
              انتخاب شده برای شما
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-xl border border-[#eeebe5] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5"
              >
                <div className="overflow-hidden bg-[#f4f1ec]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-medium">{product.title}</h3>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-[#a58b6a]">
                      {product.price}
                    </span>

                    <Link
                      to="/log"
                      className="text-xs text-gray-500 transition hover:text-black"
                    >
                      خرید محصول ←
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-[#eae7e1] bg-[#f3f0ea]">
          <div className="mx-auto max-w-7xl px-6 py-16 text-center">
            <p className="text-xs tracking-widest text-[#a58b6a]">
              ABOUT SHOPZONE
            </p>

            <h2 className="mt-4 text-2xl font-semibold">
              خریدی آسان و لذت بخش
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-gray-500">
              در SHOPZONE تلاش می‌کنیم محصولات کاربردی و باکیفیت را
              با تجربه‌ای ساده و دلنشین در اختیار شما قرار دهیم.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#292929] px-6 py-8 text-center text-sm text-gray-400">
        <p>
          © 2026 SHOPZONE - تمامی حقوق محفوظ است.
        </p>
      </footer>

    </div>
  );
}

export default App;
