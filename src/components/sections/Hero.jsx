import React from 'react';
// import './Hero.css';
import imgRectangle2 from '../../assets/imgRectangle2.svg';
import backgroundDesktop from '../../assets/sora_kbera.png';
import backgroundMobile from '../../assets/sora_soghiraa.png';

const Hero = () => {
    return (
        <section className="relative w-full h-[calc(100vh-90px)] min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[650px] overflow-hidden bg-white font-['Inter'] flex justify-center items-end pb-[10vh] pt-[90px]">
            <div className="absolute inset-0 w-full h-full mx-auto">

                {/* 1. الخلفية */}
                <div className="absolute top-[-5%] right-0 bottom-[-10vh] left-0 z-0 bg-white">
                    <img
                        src={backgroundDesktop}
                        alt="Desktop Pattern"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0 md:opacity-100"
                    />
                    <img
                        src={backgroundMobile}
                        alt="Mobile Pattern"
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-100 md:opacity-0"
                    />

                </div>

                {/* باقي الكود بتاعك... */}

            </div>
        </section>
    );
};

export default Hero;