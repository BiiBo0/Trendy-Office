import React from 'react';

// استيراد الصور (تأكد من مسار الاستيراد حسب مكان الملف)
import imgAboutSection1 from '../../assets/imgAboutSection1.png';
import imgVector from '../../assets/imgVector.svg';
import imgVector1 from '../../assets/imgVector1.svg';
import imgRectangle27 from '../../assets/imgRectangle27.svg';

const AboutHero = () => {
  return (
    <section className="flex items-start overflow-hidden mt-[-80px] relative w-full font-['Inter']">

      {/* الجزء الأيسر: النصوص والأرقام */}
      <div className="bg-white flex flex-col gap-4 h-[556px] items-start pb-6 relative w-[45%] z-20">
        <div className="flex items-center justify-center px-16 py-2 relative">
          <div className="flex gap-3 items-center relative">
            <div className="flex flex-col items-start relative">
              <div className="flex flex-col font-bold justify-center leading-none relative text-[#444748] text-sm tracking-[3.5px] uppercase whitespace-nowrap">
                <p className="leading-[18px]">About us</p>
              </div>
            </div>
            <div className="bg-[#e2e2e2] h-px relative w-12" />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-start justify-between px-16 relative w-full">
          <div className="flex flex-col gap-4 items-start relative max-w-[445px]">
            <div className="font-bold leading-none relative text-[64px] text-black tracking-[-1.024px] whitespace-nowrap">
              <p className="leading-[60.8px] mb-0 whitespace-pre">{`WHO WE `}</p>
              <p className="leading-[60.8px] whitespace-pre">ARE.</p>
            </div>
            <p className="font-light leading-normal relative text-base text-[rgba(0,0,0,0.72)] max-w-md">
              Trendy Office is a specialized company providing integrated solutions in the design, implementation, and supply of doors, partitions, furnishings, and accessories for office and commercial spaces.
            </p>

            {/* زرار Our Projects */}
            {/* CTA Button: Our Projects */}
            <button className="group flex items-center gap-3 bg-[#252525] hover:bg-black text-white px-8 py-3.5 rounded-md transition-all duration-300 mt-6 shadow-sm hover:shadow-md cursor-pointer">
              <span className="font-medium text-lg tracking-wide">Build Your Space</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* قسم الأرقام (الخبرة، المشاريع، القطاعات) */}
          <div className="flex gap-10 items-center relative w-full mt-8">
            <div className="flex flex-col gap-1.5 items-start relative w-[90px]">
              <p className="font-semibold leading-normal relative text-[#89745c] text-5xl w-full">
                15+
              </p>
              <div className="font-normal leading-none relative text-base text-[rgba(28,28,28,0.78)] w-full whitespace-pre-wrap">
                <p className="leading-normal mb-0">{`Years of `}</p>
                <p className="leading-normal">Experience</p>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0.42)] h-[85px] relative w-[2px]" />
            <div className="flex flex-col gap-1.5 items-start relative">
              <p className="font-semibold leading-normal relative text-[#89745c] text-5xl whitespace-nowrap">
                200+
              </p>
              <div className="font-normal leading-none relative text-base text-[rgba(28,28,28,0.78)]">
                <p className="leading-normal mb-0">Projects</p>
                <p className="leading-normal">Completed</p>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0.42)] h-[85px] relative w-[2px]" />
            <div className="flex flex-col gap-1.5 items-start relative w-[90px]">
              <p className="font-semibold leading-normal relative text-[#89745c] text-5xl w-full">
                5+
              </p>
              <div className="font-normal leading-none relative text-base text-[rgba(28,28,28,0.78)] w-full">
                <p className="leading-normal mb-0">Sectors</p>
                <p className="leading-normal">Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* الجزء الأيمن: الصورة والنص الجانبي */}
      {/* خلينا العرض 55% عشان يغطي المساحة الباقية، وادينا z-10 عشان يكون ورا الـ text */}
      <div className="relative h-[556px] w-[55%] z-10">

        {/* التدرج اللوني (Gradient Mask) لعمل دمج ناعم مع الجزء الأبيض */}
        <div className="absolute top-0 left-0 w-[150px] h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>

        {/* الصورة الأساسية */}
        <div className="absolute inset-0 w-full h-full">
          <img alt="Trendy Office Workspace" className="w-full h-full object-cover pointer-events-none" src={imgAboutSection1} />
        </div>

        {/* النص الجانبي العمودي (QUALITY PRECISION EXPERIENCE) */}
        <div className="absolute right-[15%] top-[30%] flex flex-col gap-2.5 items-start justify-center p-2.5 z-30">
          <div className="flex items-center justify-center w-8">
            <div className="-scale-y-100 rotate-90">
              <img alt="Divider" className="w-8 h-[1px]" src={imgRectangle27} />
            </div>
          </div>
          <p className="font-light leading-normal text-xs text-[#89745c] whitespace-nowrap">
            QUALITY
            <br />
            PRECISION
            <br />
            EXPERIENCE
          </p>
        </div>
      </div>

    </section>
  );
};

export default AboutHero;