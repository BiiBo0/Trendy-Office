import React, { useState } from 'react';

// استيراد الصورة
import imgLogo2 from '../../assets/imgLogo2.png'; 

const Clients = () => {
    const [activeSection, setActiveSection] = useState(0);

    
    const nextSection = () => {
        setActiveSection((prev) => (prev === 2 ? 0 : prev + 1));
    };

    const prevSection = () => {
        setActiveSection((prev) => (prev === 0 ? 2 : prev - 1));
    };

    const getBackgroundPosition = () => {
        if (activeSection === 0) return '5%';
        if (activeSection === 1) return '62%';
        return '90%';
    };

    return (
        <section className="w-full bg-white py-12 border-b border-[rgba(0,0,0,0.15)] font-['Inter']">
            <div className="max-w-[1512px] mx-auto px-4 md:px-10 lg:px-[64px] flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                

                <div className="flex flex-col gap-3 shrink-0 lg:w-[280px] text-center lg:text-left">
                    <h2 className="font-semibold text-black text-[32px] md:text-[36px] leading-[1.1] uppercase">
                        OUR CLIENTS
                    </h2>
                    <p className="font-light text-[#555] text-[14px] md:text-[15px] leading-relaxed max-w-[300px] mx-auto lg:mx-0">
                        Trendy Office is a trusted workspace solutions company in Egypt, helping businesses create functional and modern spaces.
                    </p>
                    
                  
                    <div className="flex justify-center lg:justify-start gap-2 mt-2">
                        {[0, 1, 2].map((idx) => (
                            <div 
                                key={idx} 
                                className={`h-1.5 rounded-full transition-all duration-300 ${activeSection === idx ? 'w-6 bg-blue-600' : 'w-2 bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>


                <div className="flex-1 w-full flex items-center gap-2 md:gap-4 relative">
                    

                    <button 
                        onClick={prevSection}
                        className="shrink-0 flex justify-center rotate-90 items-center w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-white hover:bg-gray-50 rounded-full cursor-pointer z-10 transition-colors border border-gray-200 shadow-sm"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    <div className="flex-1 overflow-hidden rounded-lg">
                        <div 
                            className="w-full h-[150px] md:h-[180px] lg:h-[220px] transition-all duration-500 ease-in-out"
                            style={{
                                backgroundImage: `url(${imgLogo2})`,
                                backgroundSize: '100% 300%', 
                                backgroundPosition: `center ${getBackgroundPosition()}`, 
                                backgroundRepeat: 'no-repeat'
                            }}
                        />
                    </div>


                    <button 
                        onClick={nextSection}
                        className="shrink-0 flex rotate-90 justify-center items-center w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-white hover:bg-gray-50 rounded-full cursor-pointer z-10 transition-colors border border-gray-200 shadow-sm"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>

                </div>

            </div>
        </section>
    );
};

export default Clients;