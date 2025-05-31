import React, { useState } from "react";
import { Search, MapPin, User } from 'lucide-react'; // Assuming lucide-react for icons

const Header = () => {
  let [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-sky-500 text-white text-xs">
        <div className="container mx-auto px-4 flex justify-between items-center py-1.5">
          <div className="flex gap-4">
            <a href="#" className="hover:underline">هیچکس تنها نیست</a>
            <a href="#" className="hover:underline">مشترکین حقیقی</a>
            <a href="#" className="hover:underline">مشترکین سازمانی</a>
          </div>
          <a href="#" className="hover:underline">ترابرد به همراه اول</a>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-[#003B5C] shadow-md border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <div className="flex items-center">
              <a href="https://mci.ir/" title="لوگو همراه اول">
                <img
                  src="/images/logo-mci.png.webp" // Assuming this is the correct path for the white logo
                  alt="لوگو همراه اول"
                  className="h-10 w-auto" // Adjusted height
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-3 flex-grow justify-end text-white text-sm">
              <a
                href="#"
                className="hover:text-sky-300 px-2 py-2 transition-colors duration-200"
              >
                اینترنت
              </a>
              <a
                href="#"
                className="hover:text-sky-300 px-2 py-2 transition-colors duration-200"
              >
                تعرفه و طرح‌های تشویقی
              </a>
              <a
                href="#"
                className="hover:text-sky-300 px-2 py-2 transition-colors duration-200"
              >
                سرویس‌ها و محصولات
              </a>
              <a
                href="#"
                className="hover:text-sky-300 px-2 py-2 transition-colors duration-200"
              >
                صورتحساب، شارژ
              </a>
              <a
                href="#"
                className="hover:text-sky-300 px-2 py-2 transition-colors duration-200"
              >
                مسابقات و برندگان
              </a>
              <a
                href="#"
                className="hover:text-sky-300 px-2 py-2 transition-colors duration-200"
              >
                پشتیبانی
              </a>
            </nav>

            {/* Icons and MyMCI Button */}
            <div className="hidden md:flex items-center gap-4 ml-4">
              <button className="text-white hover:text-sky-300">
                <Search size={20} />
              </button>
              <button className="text-white hover:text-sky-300">
                <MapPin size={20} />
              </button>
              <a href="#" className="bg-yellow-400 hover:bg-yellow-500 text-[#003B5C] px-3 py-1.5 rounded-md text-sm font-semibold transition-colors duration-200 flex items-center gap-1">
                <User size={18} />
                <span>همراه من</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white focus:outline-none"
                aria-label="باز کردن منو"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */} 
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50 flex flex-col">
          <div className="bg-[#003B5C] shadow-lg w-64 h-full ml-auto p-4 flex flex-col text-white">
            <div className="flex justify-between items-center mb-6">
              <a href="https://mci.ir/" title="لوگو همراه اول">
                <img
                  src="/images/logo-mci.png.webp"
                  alt="لوگو همراه اول"
                  className="h-8 w-auto"
                />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white focus:outline-none"
                aria-label="بستن منو"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-2 text-right text-sm">
              <a
                href="#"
                className="hover:bg-sky-700 px-3 py-2 rounded-md transition-colors duration-200"
              >
                اینترنت
              </a>
              <a
                href="#"
                className="hover:bg-sky-700 px-3 py-2 rounded-md transition-colors duration-200"
              >
                تعرفه و طرح‌های تشویقی
              </a>
              <a
                href="#"
                className="hover:bg-sky-700 px-3 py-2 rounded-md transition-colors duration-200"
              >
                سرویس‌ها و محصولات
              </a>
              <a
                href="#"
                className="hover:bg-sky-700 px-3 py-2 rounded-md transition-colors duration-200"
              >
                صورتحساب، شارژ
              </a>
              <a
                href="#"
                className="hover:bg-sky-700 px-3 py-2 rounded-md transition-colors duration-200"
              >
                مسابقات و برندگان
              </a>
              <a
                href="#"
                className="hover:bg-sky-700 px-3 py-2 rounded-md transition-colors duration-200"
              >
                پشتیبانی
              </a>
              <hr className="my-3 border-gray-600" />
              <a href="#" className="bg-yellow-400 hover:bg-yellow-500 text-[#003B5C] text-center px-4 py-2 rounded-md font-semibold transition-colors duration-200 mb-2 flex items-center justify-center gap-1">
                <User size={18} />
                <span>همراه من</span>
              </a>
               <div className="flex justify-around items-center mt-2 mb-2">
                <button className="text-gray-300 hover:text-white">
                  <Search size={22} />
                </button>
                <button className="text-gray-300 hover:text-white">
                  <MapPin size={22} />
                </button>
              </div>
              <hr className="my-3 border-gray-600" />
              <a href="#" className="hover:bg-sky-700 px-3 py-2 rounded-md transition-colors duration-200">هیچکس تنها نیست</a>
              <a href="#" className="hover:bg-sky-700 px-3 py-2 rounded-md transition-colors duration-200">مشترکین حقیقی</a>
              <a href="#" className="hover:bg-sky-700 px-3 py-2 rounded-md transition-colors duration-200">مشترکین سازمانی</a>
              <a href="#" className="hover:bg-sky-700 px-3 py-2 rounded-md transition-colors duration-200">ترابرد به همراه اول</a>
            </nav>
          </div>
        </div>
      )}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-30 md:hidden"
        ></div>
      )}
    </header>
  );
};

export default Header;
