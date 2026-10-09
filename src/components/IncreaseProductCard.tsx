import React from "react";

// Number english theke bangla-te convert korar helper function
const engToBdNum = (num) => {
  const engNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const bdNum = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num?.toString().replace(/[0-9]/g, (w) => bdNum[engNum.indexOf(w)]);
};

const IncreaseProductCard = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
  const productPrice = await res.json();

  // Jei product gulor dam bereche segulo filter kora hocche
  const higherPriceProducts = productPrice.filter(
    (product) => product.today > product.yesterday,
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {higherPriceProducts.map((product) => (
        <div
          key={product.id}
          // Jodi kono modal thake tahole onClick={() => openPriceModal(product.id)} use korben
          className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm card-hover cursor-pointer flex flex-col justify-between relative group"
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
                সর্বশেষ মূল্য
              </span>
              <span className="text-xl font-extrabold text-slate-800">
                {engToBdNum(product.today)}{" "}
                <span className="text-xs font-semibold text-slate-600">
                  টাকা
                </span>
              </span>
            </div>
            <div className="px-2.5 py-1 rounded-lg text-xs font-bold bg-rose-50 text-rose-600 border border-rose-100 flex items-center gap-1 shadow-2xs">
              <i className="fa-solid fa-caret-up text-[10px]"></i>
              <span>{engToBdNum(product.change.pct)}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IncreaseProductCard;
