import React, { useState } from 'react';
import Logoimg from '../assets/img/logo.png';
import bars from "../assets/img/bars.png";
import close from "../assets/img/close_icon.png";

const Headerr = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="max-w-[1100px] mx-auto flex justify-between items-center pb-5 px-3 relative font-[Lato,sans-serif]">
      <a href="#">
        <img src={Logoimg} alt="logo" className="w-[120px]" />
      </a>

      <div className="flex items-center gap-6">
        <ul className="hidden md:flex items-center gap-5 text-white text-[17px]">
          <li><a href="#" className="hover:text-[#94d2bd] transition">Главная</a></li>
          <li><a href="#" className="hover:text-[#94d2bd] transition">Про гида</a></li>
          <li><a href="#" className="hover:text-[#94d2bd] transition">Программа тура</a></li>
          <li><a href="#" className="hover:text-[#94d2bd] transition">Стоимость</a></li>
          <li><a href="#" className="hover:text-[#94d2bd] transition">Блог</a></li>
          <li><a href="#" className="hover:text-[#94d2bd] transition">Контакты</a></li>
        </ul>

        <button className="hidden md:block bg-[#1a3d3d] text-white py-2 px-5 rounded-[10px] hover:bg-[#2b5c5c] transition">
          Консультация
        </button>

        <button
          className="block md:hidden z-[1000]"
          onClick={() => setMenuOpen(true)}
        >
          <img src={bars} alt="menu" className="w-8" />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#1a3d3d] flex flex-col pt-16 pl-6 space-y-5 text-white text-[20px] z-[9999] transition-transform duration-500 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          className="absolute top-4 right-6 text-3xl hover:text-gray-300 transition"
          onClick={() => setMenuOpen(false)}
        >
          <img src={close} alt="close" className="w-8" />
        </button>

        <a href="#" className="hover:text-gray-300 transition">Главная</a>
        <a href="#" className="hover:text-gray-300 transition">Про гида</a>
        <a href="#" className="hover:text-gray-300 transition">Программа тура</a>
        <a href="#" className="hover:text-gray-300 transition">Стоимость</a>
        <a href="#" className="hover:text-gray-300 transition">Блог</a>
        <a href="#" className="hover:text-gray-300 transition">Контакты</a>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[998] md:hidden transition-opacity duration-500"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Headerr;
