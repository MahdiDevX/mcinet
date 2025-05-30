// src/components/HowTo.jsx
import React from "react";

// فرض کنید تصاویر در مسیر public/images/points/ ذخیره شده‌اند
const points = [
  {
    title: "فعالسازی سیم کارت دائمی",
    score: "100 امتیاز",
    img: "/images/points/package100.jpg",
  },
  {
    title: "فعالسازی مجدد سیم‌کارت",
    score: "50 امتیاز",
    img: "/images/points/package4.jpg",
  },
  {
    title: "کارکرد (به ازای هر 10,000 ریال)",
    score: "1 امتیاز",
    img: "/images/points/package3.jpg",
  },
  {
    title: "تبدیل اعتباری به دائمی",
    score: "100 امتیاز",
    img: "/images/points/package2-2.jpg",
  },
  {
    title: "فعالسازی سیم کارت اعتباری",
    score: "10 امتیاز",
    img: "/images/points/package5.jpg",
  },
];

const HowTo = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="md:flex md:items-center mb-10">
          <div className="md:w-1/2 md:pr-8 text-right order-2 md:order-1">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              نحوه شرکت در قرعه کشی پژو 207 اتوماتیک{" "}
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              برای شرکت در{" "}
              <strong>قرعه‌کشی بزرگ پژو 207 اتوماتیک همراه اول، </strong>کافیست
              فعالیت‌های زیر را انجام دهید و <b>امتیاز </b>جمع کنید. هرچه{" "}
              <b>امتیاز بیشتری </b> جمع‌آوری کنید، شانس شما برای بردن{" "}
              <strong>جایزه ویژه پژو 207 اتوماتیک </strong> بیشتر خواهد بود.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end order-1 md:order-2">
            <img
              src="/images/207prize-faq.png" // مسیر نمونه برای تصویر این بخش
              alt="شرکت در قرعه کشی پژوه 207"
              className="rounded-lg max-w-xs w-full"
            />
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-8">
          نحوه دریافت امتیاز{" "}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="text-center bg-white p-3 md:p-4 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={point.img}
                alt={point.title}
                className="w-full h-auto object-contain rounded-md mb-3 max-h-32"
              />
              <span className="text-xs sm:text-sm font-semibold text-gray-700 flex-grow text-center">
                {point.title}
              </span>
              <span className="text-xs sm:text-sm text-blue-500 font-bold mt-1">
                {point.score}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowTo;
