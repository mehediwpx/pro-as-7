import Link from "next/link";
import React from "react";

const Navliks = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
  );
  const data = await res.json();
  return (
    <nav className="hidden xl:flex items-center gap-1 bg-gray-100/70 p-1.5 rounded-2xl border border-gray-200/60">
      <Link
        className="px-3 py-1.5 text-sm font-medium text-emerald-700 bg-white rounded-xl shadow-sm transition"
        href="/"
      >
        🏠 হোম
      </Link>
      {data.map((nav: any) => (
        <Link
          className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-white/80 rounded-xl transition"
          key={nav.id}
          href={`/category/${nav.slug}`}
        >
          {nav.nameBn}
        </Link>
      ))}
    </nav>
  );
};

export default Navliks;
