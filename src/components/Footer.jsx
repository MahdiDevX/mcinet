// src/components/Footer.jsx
import React from "react";

// نیازی به import تصاویر از پوشه public نیست

const Footer = () => {
  // مسیرها به تصاویر در پوشه public باید از ریشه باشند
  const EnamadLogoPath = "/images/footer/enamad.png";
  const SamandehiLogoPath = "/images/footer/195.png";

  return (
    <footer className="bg-gray-800 text-gray-300 text-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-right">
          <div>
            <h3 className="font-bold text-white mb-4 text-base">اینترنت</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://mci.ir/5g" className="hover:text-blue-400">
                  اینترنت 5G
                </a>
              </li>
              <li>
                <a
                  href="https://mci.ir/internet-plans#personalized"
                  className="hover:text-blue-400"
                >
                  اینترنت همراهی
                </a>
              </li>
              <li>
                <a
                  href="https://mci.ir/internet-plans"
                  className="hover:text-blue-400"
                >
                  بسته های اینترنت
                </a>
              </li>
              <li>
                <a
                  href="https://mci.ir/internet-settings"
                  className="hover:text-blue-400"
                >
                  تنظیمات و فعالسازی
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4 text-base">سرویس ها</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://my.mci.ir/app" className="hover:text-blue-400">
                  اپلیکیشن همراه من
                </a>
              </li>
              <li>
                <a
                  href="https://shop.mci.ir/billing"
                  className="hover:text-blue-400"
                >
                  پرداخت صورتحساب
                </a>
              </li>
              <li>
                <a
                  href="https://shop.mci.ir/charge"
                  className="hover:text-blue-400"
                >
                  خرید شارژ
                </a>
              </li>
              <li>
                <a
                  href="https://mci.ir/roaming"
                  className="hover:text-blue-400"
                >
                  رومینگ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4 text-base">
              طرح ها و برندگان
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://mci.ir/mymciprize"
                  className="hover:text-blue-400"
                >
                  قرعه کشی همراه من
                </a>
              </li>
              <li>
                <a href="https://mci.ir/haj" className="hover:text-blue-400">
                  بسته‌های رومینگ حج
                </a>
              </li>
              <li>
                <a
                  href="https://newmci.ir/brand-identity/#new-identity"
                  className="hover:text-blue-400"
                >
                  لوگوی جدید همراه اول
                </a>
              </li>
              <li>
                <a
                  href="https://mci.ir/customerclub-winners"
                  className="hover:text-blue-400"
                >
                  برندگان باشگاه مشتریان
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4 text-base">
              لینک های ویژه
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.cra.ir/home"
                  className="hover:text-blue-400"
                >
                  سازمان تنظیم مقررات
                </a>
              </li>
              <li>
                <a href="https://195.cra.ir/" className="hover:text-blue-400">
                  سامانه 195
                </a>
              </li>
              <li>
                <a href="https://mci.ir/news" className="hover:text-blue-400">
                  اخبار
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4 text-base">درباره ما</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://mci.ir/contact"
                  className="hover:text-blue-400"
                >
                  پشتیبانی همراه اول
                </a>
              </li>
              <li>
                <a
                  href="https://mci.ir/mci-offices"
                  className="hover:text-blue-400"
                >
                  دفاتر و نمایندگی ها
                </a>
              </li>
              <li>
                <a href="https://jobs.mci.ir/" className="hover:text-blue-400">
                  فرصت های همکاری
                </a>
              </li>
              <li>
                <a href="https://tamin.mci.ir/" className="hover:text-blue-400">
                  مناقصه ها و مزایده ها
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-right">
            <p>شرکت ارتباطات سیار ایران (همراه اول)</p>
            <p className="mt-1">شماره پروانه رگولاتوری 100/1100</p>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse">
            <a
              href="https://trustseal.enamad.ir/?id=18012&Code=wRMU0zTyo0sER0MgnbKc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={EnamadLogoPath}
                alt="نماد اعتماد الکترونیکی"
                className="h-16 w-auto"
              />
            </a>
            <a
              href="https://195.cra.ir/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={SamandehiLogoPath}
                alt="سامانه پاسخگویی 195"
                className="h-16 w-auto"
              />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-xs">
          <p>همراه اول در شبکه های اجتماعی:</p>
          <div className="flex justify-center space-x-3 space-x-reverse mt-2">
            <a href="#" className="hover:text-blue-400">
              توییتر
            </a>
            <a href="#" className="hover:text-blue-400">
              اینستاگرام
            </a>
            <a href="#" className="hover:text-blue-400">
              لینکدین
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
