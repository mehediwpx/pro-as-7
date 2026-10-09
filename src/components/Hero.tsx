import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-emerald-50 via-teal-50/60 to-emerald-100/40 rounded-3xl p-6 sm:p-10 border border-emerald-100/80 shadow-sm overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
      {/* <!-- Left Banner Text --> */}
      <div className="space-y-4 max-w-2xl text-center md:text-left z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-600 text-white shadow-sm">
          📅 মঙ্গলবার, ৯ অক্টোবর, ২০২৪
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
          আজকের বাজারের দাম <span className="text-emerald-600">এক নজরে</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলাসহ সকল নিত্যপ্রয়োজনীয়
          জিনিসপত্রের প্রতিদিনের সঠিক বাজার দর ও আপডেটের নির্ভরযোগ্য উৎস।
        </p>
        <div className="pt-2">
          <a
            href="#all-products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl shadow-lg shadow-emerald-600/30 transition transform hover:-translate-y-0.5"
          >
            সব পণ্য দেখুন
          </a>
        </div>
      </div>

      {/* <!-- Right Graphic Basket Illustration --> */}
      <div className="relative flex items-center justify-center z-10">
        <div className="w-48 h-48 sm:w-56 sm:h-56 bg-white/80 backdrop-blur-md rounded-full shadow-xl border border-emerald-100 flex items-center justify-center p-6 transform hover:rotate-3 transition duration-300">
          <div className="text-center space-y-1">
            <span className="text-6xl sm:text-7xl block animate-bounce">
              🧺
            </span>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full inline-block">
              ১০০% তাজা আপডেট
            </span>
          </div>
        </div>
      </div>

      {/* <!-- Background Glow Effects --> */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default Hero;
