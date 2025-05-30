// src/components/Intro.jsx
import React from "react";

const Intro = () => {
  const peugeotImagePath = "/images/207prize.png"; // مسیر تصویر در پوشه public

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="md:flex md:items-center md:flex-row-reverse">
          <div className="md:w-1/2 md:pl-8 text-right">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              قرعه کشی استانی پژو 207 اتوماتیک همراه اول
            </h1>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              از <strong> ۱ دی تا ۳۱ خرداد ۱۴۰۴</strong> با انجام فعالیت‌های
              مشخص شده <strong>امتیاز</strong> جمع کنید و شانس برنده شدن در{" "}
              <strong>قرعه‌کشی استانی پژو 207 اتوماتیک همراه اول </strong>را به
              دست آورید.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-start">
            {/* کامنت را می‌توانید اینجا یا خارج از تگ قرار دهید */}
            {/* Use the direct path variable here */}
            <img
              src={peugeotImagePath}
              alt="قرعه کشی استانی پژو 207 همراه اول"
              className="rounded-lg shadow-lg max-w-sm w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
