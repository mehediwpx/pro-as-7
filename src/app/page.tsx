import Hero from "@/components/Hero";
import Image from "next/image";

const engToBdNum = (num) => {
  const engNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const bdNum = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num?.toString().replace(/[0-9]/g, (w) => bdNum[engNum.indexOf(w)]);
};

export default async function Home() {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const productPrice = await res.json();

  // Dam bereche (Price increased)
  const higherPriceProducts = productPrice.filter(
    (product) => product.change.dir === "up",
  );

  // Dam komeche (Price decreased)
  const decreasedPriceProducts = productPrice.filter(
    (product) => product.change.dir === "down",
  );

  // All products (Sob ponno)
  const allProducts = productPrice;

  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Hero Banner Section */}
        <Hero />

        {/* SECTION 1: "আজ দাম বেড়েছে" (Prices Increased Today) */}
        <section id="increased" className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-caret-up text-rose-500 text-lg"></i>
              <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <span>আজ দাম বেড়েছে</span>
                <span className="text-xs px-2 py-0.5 bg-rose-100 text-rose-700 rounded-md font-semibold">
                  {engToBdNum(higherPriceProducts.length)}টি পণ্য
                </span>
              </h2>
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline">
              <i className="fa-solid fa-arrow-up-long text-rose-500"></i> বিগত
              ২৪ ঘণ্টার তথ্য
            </span>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            id="grid-increased"
          >
            {higherPriceProducts.map((product) => (
              <div
                key={product.id}
                // onClick={() => openPriceModal(product.id)}
                className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm cursor-pointer flex flex-col justify-between relative group transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {product.image}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-base leading-tight group-hover:text-emerald-700 transition">
                        {product.nameBn}
                      </h3>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        প্রতি{" "}
                        {product.unit === "kg"
                          ? "কেজি"
                          : product.unit === "litre"
                            ? "লিটার"
                            : product.unit === "dozen"
                              ? "ডজন"
                              : "পিস"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">
                      আজকের দাম
                    </span>
                    <span className="text-xl font-extrabold text-slate-800">
                      {engToBdNum(product.today)}{" "}
                      <span className="text-xs font-semibold text-slate-600">
                        টাকা
                      </span>
                    </span>
                  </div>
                  <div
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border flex items-center gap-1 shadow-2xs ${product.change.dir === "up" ? "bg-rose-50 text-rose-600 border-rose-100" : "bg-emerald-50 text-emerald-600 border-emerald-100"}`}
                  >
                    <i
                      className={`fa-solid ${product.change.dir === "up" ? "fa-caret-up" : "fa-caret-down"} text-[10px]`}
                    ></i>
                    <span>{engToBdNum(Math.abs(product.change.pct))}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: "আজ দাম কমেছে" (Prices Decreased Today) */}
        <section id="decreased" className="space-y-4 pt-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-caret-down text-emerald-500 text-lg"></i>
              <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <span>আজ দাম কমেছে</span>
                <span className="text-xs px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-md font-semibold">
                  {engToBdNum(decreasedPriceProducts.length)}টি পণ্য
                </span>
              </h2>
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline">
              <i className="fa-solid fa-arrow-down-long text-emerald-500"></i>{" "}
              ক্রেতাদের জন্য স্বস্তি
            </span>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            id="grid-decreased"
          >
            {decreasedPriceProducts.map((product) => (
              <div
                key={product.id}
                // onClick={() => openPriceModal(product.id)}
                className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm cursor-pointer flex flex-col justify-between relative group transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {product.image}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-base leading-tight group-hover:text-emerald-700 transition">
                        {product.nameBn}
                      </h3>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        প্রতি{" "}
                        {product.unit === "kg"
                          ? "কেজি"
                          : product.unit === "litre"
                            ? "লিটার"
                            : product.unit === "dozen"
                              ? "ডজন"
                              : "পিস"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">
                      আজকের দাম
                    </span>
                    <span className="text-xl font-extrabold text-slate-800">
                      {engToBdNum(product.today)}{" "}
                      <span className="text-xs font-semibold text-slate-600">
                        টাকা
                      </span>
                    </span>
                  </div>
                  <div
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border flex items-center gap-1 shadow-2xs ${product.change.dir === "up" ? "bg-rose-50 text-rose-600 border-rose-100" : "bg-emerald-50 text-emerald-600 border-emerald-100"}`}
                  >
                    <i
                      className={`fa-solid ${product.change.dir === "up" ? "fa-caret-up" : "fa-caret-down"} text-[10px]`}
                    ></i>
                    <span>{engToBdNum(Math.abs(product.change.pct))}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: "সব পণ্য" (All Products Grid) */}
        <section id="all-products" className="space-y-4 pt-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-boxes-stacked text-blue-500 text-lg"></i>
              <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <span>সব পণ্য</span>
                <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-md font-semibold">
                  {engToBdNum(allProducts.length)}টি পণ্য
                </span>
              </h2>
            </div>
            <span className="text-xs text-slate-500 hidden sm:inline">
              বাজারের সকল পণ্যের তালিকা
            </span>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            id="grid-all"
          >
            {allProducts.map((product) => (
              <div
                key={product.id}
                // onClick={() => openPriceModal(product.id)}
                className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm cursor-pointer flex flex-col justify-between relative group transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {product.image}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-base leading-tight group-hover:text-emerald-700 transition">
                        {product.nameBn}
                      </h3>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        প্রতি{" "}
                        {product.unit === "kg"
                          ? "কেজি"
                          : product.unit === "litre"
                            ? "লিটার"
                            : product.unit === "dozen"
                              ? "ডজন"
                              : "পিস"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-medium">
                      আজকের দাম
                    </span>
                    <span className="text-xl font-extrabold text-slate-800">
                      {engToBdNum(product.today)}{" "}
                      <span className="text-xs font-semibold text-slate-600">
                        টাকা
                      </span>
                    </span>
                  </div>
                  <div
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border flex items-center gap-1 shadow-2xs ${product.change.dir === "up" ? "bg-rose-50 text-rose-600 border-rose-100" : product.change.dir === "down" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-slate-50 text-slate-600 border-slate-100"}`}
                  >
                    {product.change.dir !== "flat" && (
                      <i
                        className={`fa-solid ${product.change.dir === "up" ? "fa-caret-up" : "fa-caret-down"} text-[10px]`}
                      ></i>
                    )}
                    <span>{engToBdNum(Math.abs(product.change.pct))}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
