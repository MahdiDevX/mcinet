import React, { useState } from "react";

const Header = () => {
  let [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let logoPath = "/images/logo-mci.png.webp";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="flex items-center">
            <a href="https://mci.ir/" title="لوگو همراه اول">
              <img
                src="/images/logo-mci.png.webp"
                alt="لوگو همراه اول"
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Main Nav */}
          <nav className="hidden md:flex items-center gap-2 flex-grow justify-center">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              صفحه اصلی
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              محصولات و خدمات
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              تعرفه و طرح‌ها
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              پشتیبانی
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              باشگاه فیروزه‌ای
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              درباره ما
            </a>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://join.mci.ir/"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-bold transition-colors duration-200"
              title="ترابرد به همراه اول"
            >
              ترابرد به همراه اول
            </a>
            <a
              href="https://shop.mci.ir/"
              className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-bold transition-colors duration-200"
              title="فروشگاه همراه اول"
            >
              فروشگاه
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
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
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-40 flex flex-col">
          <div className="bg-white shadow-lg w-64 h-full ml-auto p-4 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <a href="https://mci.ir/" title="لوگو همراه اول">
                <img
                  src="/images/logo-mci.png.webp"
                  alt="لوگو همراه اول"
                  className="h-10 w-auto"
                />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-600 focus:outline-none"
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
            <nav className="flex flex-col gap-2 text-right">
              <a
                href="#"
                className="text-gray-700 hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                صفحه اصلی
              </a>
              <a
                href="#"
                className="text-gray-700 hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                محصولات و خدمات
              </a>
              <a
                href="#"
                className="text-gray-700 hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                تعرفه و طرح‌ها
              </a>
              <a
                href="#"
                className="text-gray-700 hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                پشتیبانی
              </a>
              <a
                href="#"
                className="text-gray-700 hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                باشگاه فیروزه‌ای
              </a>
              <a
                href="#"
                className="text-gray-700 hover:bg-blue-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                درباره ما
              </a>
              <hr className="my-2" />
              <a
                href="https://join.mci.ir/"
                className="bg-blue-500 hover:bg-blue-600 text-white text-center px-4 py-2 rounded-md text-sm font-bold transition-colors duration-200 mb-2"
                title="ترابرد به همراه اول"
              >
                ترابرد به همراه اول
              </a>
              <a
                href="https://shop.mci.ir/"
                className="bg-orange-400 hover:bg-orange-500 text-white text-center px-4 py-2 rounded-md text-sm font-bold transition-colors duration-200"
                title="فروشگاه همراه اول"
              >
                فروشگاه
              </a>
            </nav>
          </div>
        </div>
      )}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
        ></div>
      )}
    </header>
  );
};

export default Header;
