import React, { useState, useEffect } from 'react';
import logo from '../../assets/imgLogo.png';

const Navbar = () => {
    // حالة للتحكم في فتح وإغلاق القائمة الجانبية
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // إغلاق القائمة تلقائياً عند تكبير الشاشة لضمان عدم وجود أخطاء في التصميم
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        // مسافات بادئة متغيرة: صغيرة للموبايل، متوسطة للتابلت، وكبيرة للديسكتوب
        <header className="flex justify-between items-center py-4 px-5 md:px-8 lg:px-12 xl:px-16 bg-white relative z-50 ">
            
            {/* الشعار */}
            <div className="flex items-center gap-2 lg:gap-3 relative z-50">
                <img src={logo} alt="Trendy Office" className="h-7 md:h-8 lg:h-10 object-contain" />
                <span className="font-extrabold text-base md:text-xl lg:text-2xl tracking-wide text-gray-800 whitespace-nowrap">
                    TRENDY OFFICE
                </span>
            </div>

            {/* روابط الديسكتوب (تظهر فقط في الشاشات من lg فما فوق أي 1024px+) */}
            <nav className="hidden lg:flex items-center lg:gap-6 xl:gap-10 font-medium text-gray-600 text-[14px] xl:text-[15px]">
                <a href="#" className="text-[#6fa8dc] transition">Home</a>
                <a href="#" className="hover:text-black transition">About Us</a>
                <a href="#" className="hover:text-black transition">Projects</a>
                <a href="#" className="hover:text-black transition">Product</a>
                <a href="#" className="hover:text-black transition">Contact</a>
            </nav>

            {/* زر الديسكتوب (يظهر فقط في الشاشات الكبيرة) */}
            <button className="hidden lg:block border border-gray-700 text-[#6fa8dc] font-medium px-5 xl:px-6 py-2 rounded-sm hover:bg-gray-50 transition duration-300 cursor-pointer whitespace-nowrap">
                Start a Project
            </button>

            {/* أيقونة الهامبرجر (تظهر في الموبايل والتابلت حتى 1023px) */}
            <button 
                className="lg:hidden flex flex-col gap-[5px] p-2 relative z-50 cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <div className={`w-6 h-[2px] bg-black transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></div>
                <div className={`w-6 h-[2px] bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-[2px] bg-black transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></div>
            </button>

            {/* القائمة الجانبية (للموبايل والتابلت) */}
            {/* عرض القائمة يتغير: 75% للموبايل، و 40% للتابلت لكي لا تأخذ الشاشة كلها */}
            <div className={`fixed top-0 right-0 h-screen w-[75%] sm:w-[60%] md:w-[40%] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col pt-24 px-8 gap-6 z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <a href="#" className="text-[#6fa8dc] text-base md:text-lg font-medium border-b pb-2">Home</a>
                <a href="#" className="text-gray-600 text-base md:text-lg font-medium border-b pb-2">About Us</a>
                <a href="#" className="text-gray-600 text-base md:text-lg font-medium border-b pb-2">Projects</a>
                <a href="#" className="text-gray-600 text-base md:text-lg font-medium border-b pb-2">Product</a>
                <a href="#" className="text-gray-600 text-base md:text-lg font-medium border-b pb-2">Contact</a>
                <button className="border border-gray-700 text-[#6fa8dc] font-medium px-6 py-3 mt-4 rounded-sm hover:bg-gray-50 transition duration-300">
                    Start a Project
                </button>
            </div>
            
            {/* خلفية معتمة (Overlay) عند فتح القائمة */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}
        </header>
    );
};

export default Navbar;