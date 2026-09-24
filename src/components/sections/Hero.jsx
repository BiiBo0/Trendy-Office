import React from 'react';
import './Hero.css';
import imgRectangle2 from '../../assets/imgRectangle2.svg';
import imgFloor3 from '../../assets/imgFloor3.png';
import imgOffice1 from '../../assets/imgOffice1.png';
import imgOpenBlueWithoutBackground1 from '../../assets/imgOpenBlueWithoutBackground1.png';
import imgLilyInPot1 from '../../assets/imgLilyInPot1.png';

const Hero = () => {
    return (
        <section className="relative w-full h-[calc(100vh-90px)] min-h-[750px] overflow-hidden bg-white font-['Inter'] flex justify-center items-center">

            <div className="relative w-full max-w-[1512px] h-full flex justify-center items-center">

                {/* 1. الخلفية */}
                <div className="absolute inset-0 z-0">
                    <img src={imgRectangle2} alt="Pattern" className="w-full h-full object-cover opacity-90" />
                </div>

                {/* 2. الأرضية */}
                <div
                    className="absolute bottom-0 left-0 w-full h-[35%] z-0"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent, black 25%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 25%)'
                    }}
                >
                    <img src={imgFloor3} alt="Floor" className="w-full h-full object-cover opacity-90" />
                </div>

                {/* 3. الزرعة (imgLilyInPot1) */}
                <img 
                    src={imgLilyInPot1} 
                    alt="Lily in pot" 
                    className="absolute z-20 bottom-[30%] left-[25%] w-[200px] object-contain drop-shadow-[25px_15px_15px_rgba(0,0,0,0.3)] pointer-events-none"
                />

                <div className="absolute z-30 w-[900px] h-[600px] mt-[-180px] flex justify-center items-center">

                    <div className="absolute bottom-[13%] left-[38%] w-[30%] h-[83%] z-10 overflow-hidden shadow-[inset_0px_5px_15px_rgba(0,0,0,0.3)] bg-white rounded-sm">
                        <img
                            src={imgOffice1}
                            alt="Office Inside"
                            className="w-full h-full object-cover object-bottom transform scale-[1.10] translate-y-[5%]"
                        />
                    </div>

                    <div className="absolute z-20 w-full flex flex-col items-center gap-6 mt-[-200px] pointer-events-none">
                        <div className="w-full grid grid-cols-[1fr_1.5fr] items-center text-[96px] font-semibold tracking-[8px] uppercase leading-none">
                            <span className="text-black justify-self-end mr-[10px]">ENT</span>
                            <span className="text-[#fdfdfd] justify-self-start ml-[10px] drop-shadow-md">ER</span>
                        </div>
                        <div className="w-full grid grid-cols-[1fr_0.8fr_1fr] items-center text-[96px] font-semibold tracking-[8px] uppercase leading-none mt-4">
                            <span className="text-black justify-self-end mr-[-30px]">THE</span>
                            <span className="text-[#fdfdfd] justify-self-center drop-shadow-md mr-[-30px]">SP</span>
                            <span className="text-black justify-self-start ml-[30px]">ACE</span>
                        </div>
                    </div>

                    <img
                        src={imgOpenBlueWithoutBackground1}
                        alt="Blue door"
                        className="absolute z-30 bottom-[11%] right-[20%] w-[54%] h-[87%] object-contain pointer-events-none drop-shadow-2xl"
                    />

                    <div className="center-shadow absolute z-0 bottom-[11%] right-[20%] w-[54%] h-10" />
                    <div className="left-shadow absolute z-0 bottom-[11%] right-[20%] w-[54%] h-10" />
                    <div className="right-shadow absolute z-0 bottom-[11%] right-[20%] w-[54%] h-10" />

                </div>
            </div>
        </section>
    );
};

export default Hero;