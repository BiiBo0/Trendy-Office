import React from 'react';
import logo from '../../assets/imgLogo.png';

const Navbar = () => {
    return (
        <header className="flex justify-between items-center py-4 px-10 bg-white">

            <div className="flex items-center gap-3">
                <img src={logo} alt="Trendy Office" className="h-10 object-contain" />
                <span className="font-extrabold text-2xl tracking-wide text-gray-800">
                    TRENDY OFFICE
                </span>
            </div>

            <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600 text-[15px]">

                <a href="#" className="text-[#6fa8dc] transition">Home</a>
                <a href="#" className="hover:text-black transition">About Us</a>
                <a href="#" className="hover:text-black transition">Projects</a>
                <a href="#" className="hover:text-black transition">Product</a>
                <a href="#" className="hover:text-black transition">Contact</a>
            </nav>

            <button className="border border-gray-700 text-[#6fa8dc] font-medium px-6 py-2 rounded-sm hover:bg-gray-50 transition duration-300 cursor-pointer">
                Start a Project
            </button>

        </header>
    );
};

export default Navbar;