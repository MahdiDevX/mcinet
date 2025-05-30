// src/components/Hero.jsx
import React, { useState, useEffect } from "react";

// فرض کنید تصاویر اسلایدر در مسیر public/images/slider/ ذخیره شده‌اند
const sliderImagesDesktop = [
  "https://mci.ir/documents/20147/3048995/slider-desktop-newBranding.jpg/9830e810-a0bb-5aa2-d34a-1d8e76fcd7ff?t=1737330527468", // آدرس نمونه اول
  // 'https://mci.ir/documents/20147/3017132/bg-main-banner.png/d004d0cf-923f-c2e0-503b-a9b889edb956?t=1728711729142' // آدرس نمونه دوم - می‌توانید تصاویر بیشتری اضافه کنید
];
const sliderImagesMobile = [
  "https://mci.ir/documents/20147/3048995/slider-mobile-newBranding.jpg/e490e8e9-5c66-88fa-620a-e3134f640c84?t=1737330528465", // آدرس نمونه اول
  //  'https://mci.ir/documents/20147/3046817/mci-digikala-mobile.jpg/07e0e4e8-7818-db1c-77ec-1e575bdbf3eb?t=1732113810367' // آدرس نمونه دوم
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (sliderImagesDesktop.length <= 1) return; // اگر فقط یک تصویر وجود دارد، اسلایدشو را فعال نکن
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === sliderImagesDesktop.length - 1 ? 0 : prev + 1
      );
    }, 5000); // تغییر اسلاید هر 5 ثانیه
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        paddingTop:
          "50%" /* Aspect ratio, adjust as needed e.g. 56.25% for 16:9 */,
      }}
    >
      {/* Desktop Slider */}
      <div className="hidden md:block absolute inset-0">
        {sliderImagesDesktop.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={`اسلاید ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      {/* Mobile Slider */}
      <div className="md:hidden absolute inset-0">
        {sliderImagesMobile.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={`اسلاید موبایل ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay Text (اگر متن روی اسلایدر دارید) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-30 p-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          قرعه کشی استانی پژو 207 اتوماتیک
        </h1>
        <p className="mt-2 text-md md:text-lg">
          از ۱ دی تا ۳۱ خرداد ۱۴۰۴ با افزایش امتیاز، شانس خود را افزایش دهید
        </p>
      </div>

      {/* Dots (اگر بیش از یک تصویر دارید) */}
      {sliderImagesDesktop.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 rtl:space-x-reverse">
          {sliderImagesDesktop.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide
                  ? "bg-white"
                  : "bg-gray-400 hover:bg-gray-200"
              }`}
              aria-label={`رفتن به اسلاید ${index + 1}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hero;
