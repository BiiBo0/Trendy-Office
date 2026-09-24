import React from 'react';
// استدعاء اللوجو من مسار الـ assets
import logo from '../../assets/imgLogo.png';

const Navbar = () => {
    return (
        <header className="flex justify-between items-center py-4 px-10 bg-white">

            {/* 1. قسم الشعار (اللوجو والاسم) */}
            <div className="flex items-center gap-3">
                <img src={logo} alt="Trendy Office" className="h-10 object-contain" />
                <span className="font-extrabold text-2xl tracking-wide text-gray-800">
                    TRENDY OFFICE
                </span>
            </div>

            {/* 2. روابط التنقل (تختفي في شاشات الموبايل الصغيرة) */}
            <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600 text-[15px]">
                {/* لون كلمة Home أزرق فاتح بناءً على التصميم */}
                <a href="#" className="text-[#6fa8dc] transition">Home</a>
                <a href="#" className="hover:text-black transition">About Us</a>
                <a href="#" className="hover:text-black transition">Projects</a>
                <a href="#" className="hover:text-black transition">Product</a>
                <a href="#" className="hover:text-black transition">Contact</a>
            </nav>

            {/* 3. زر طلب مشروع */}
            <button className="border border-gray-700 text-[#6fa8dc] font-medium px-6 py-2 rounded-sm hover:bg-gray-50 transition duration-300 cursor-pointer">
                Start a Project
            </button>

        </header>
    );
};

export default Navbar;