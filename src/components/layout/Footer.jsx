import React from 'react';
import imgLogo from '../../assets/imgLogo.png'; 
const Footer = () => {
  return (
    <footer className="w-full bg-[#f3f3f3] font-['Work_Sans'] border-t border-[#e2e2e2] flex flex-col items-center pt-16">
      
      <div className="w-full max-w-[1280px] px-12 md:px-16 flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between pb-16">
        
        <div className="flex flex-col items-start gap-6 lg:w-[280px] shrink-0">
          <div className="flex flex-col gap-1.5 items-start">
            <div className="flex items-center gap-2">
              <img src={imgLogo} alt="Trendy Office Logo" className="w-[48px] h-[48px]" />
              <span className="font-['Inter'] font-semibold text-[#383636] text-[22px] whitespace-nowrap">
                TRENDY OFFICE
              </span>
            </div>
            <p className="text-[#444748] text-[15px] leading-[24px]">
              Modern doors for modern<br />workspaces.
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-[#383636]">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 flex-1">
          <h4 className="font-['Space_Grotesk'] font-semibold text-[14px] text-black uppercase tracking-[1.4px]">
            QUICK LINKS
          </h4>
          <ul className="flex flex-col gap-2.5 text-[#444748] text-[15px]">
            <li><a href="#" className="hover:text-black transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Products</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Projects</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-4 flex-1">
          <h4 className="font-['Space_Grotesk'] font-semibold text-[14px] text-black uppercase tracking-[1.4px]">
            SOLUTIONS
          </h4>
          <ul className="flex flex-col gap-2.5 text-[#444748] text-[15px]">
            <li><a href="#" className="hover:text-black transition-colors">Office Buildings</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Workspaces & Commercial</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Partitions</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Educational</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Healthcare</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-4 flex-1">
          <h4 className="font-['Space_Grotesk'] font-semibold text-[14px] text-black uppercase tracking-[1.4px]">
            CONTACT INFORMATION
          </h4>
          <ul className="flex flex-col gap-3 text-[#444748] text-[15px]">
            <li className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>+20 2 1234 5678</span>
            </li>
            <li className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>info@trendyoffice.com</span>
            </li>
            <li className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>New Cairo, Cairo, Egypt</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="w-full border-t border-[#e2e2e2]">
        <div className="max-w-[1280px] mx-auto px-12 md:px-16 py-6 flex flex-col md:flex-row justify-between items-center text-[13px] text-[#444748] gap-4">
          <p>© 2026 Trendy Office. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <span className="text-[#c4c7c7]">|</span>
            <a href="#" className="hover:text-black transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;