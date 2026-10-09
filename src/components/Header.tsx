import React from "react";
import Navliks from "./Navliks";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* <!-- Left: Logo & Date --> */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-emerald-600 text-white rounded-xl flex items-center justify-center shadow-md shadow-emerald-200">
              {/* <!-- Market Basket SVG Icon --> */}
            </div>
            <div>
              <a
                href="#"
                className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-1"
              >
                বাজার দর{" "}
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </a>
              <p className="text-xs text-gray-500 font-medium">
                মঙ্গলবার, ৯ অক্টোবর, ২০২৪
              </p>
            </div>
          </div>

          {/* <!-- Middle: Navigation Categories Menu --> */}
          <Navliks />

          {/* <!-- Right: Sign In and Sign Up Buttons in Bangla --> */}
          <div className="flex items-center gap-2.5">
            {/* <!-- Sign In Button --> */}
            <a
              href="#"
              className="px-4 py-2 text-sm font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-xl transition duration-200 flex items-center gap-1.5"
            >
              সাইন ইন
            </a>

            {/* <!-- Sign Up Button --> */}
            <a
              href="#"
              className="px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 rounded-xl transition duration-200 flex items-center gap-1.5"
            >
              সাইন আপ
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
