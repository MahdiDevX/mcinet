// src/components/Faq.jsx
import React, { useState } from "react";
// نیازی به import تصویر از پوشه public نیست
// import FaqImage from "/images/207prize-faq.png"; // <-- این خط را حذف کنید

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-right py-4 px-1 flex justify-between items-center focus:outline-none"
      >
        <span className="font-semibold text-sm sm:text-base text-gray-800">
          {question}
        </span>
        <span
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          } text-blue-500`}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50 text-gray-700 text-sm sm:text-base leading-relaxed">
          {/* استفاده از dangerouslySetInnerHTML برای رندر کردن تگ های HTML در پاسخ */}
          <p
            dangerouslySetInnerHTML={{
              __html: answer.replace(
                /\*10\*60#/g,
                '<a href="tel:*10*60%23" class="text-blue-500 hover:underline" dir="ltr">*10*60#</a>'
              ),
            }}
          ></p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const faqs = [
    {
      question: "چه زمانی قرعه‌کشی برگزار می‌شود؟",
      answer:
        "قرعه‌کشی بزرگ پژو 207 اتوماتیک در <b>فصل تابستان ۱۴۰۴ </b>برگزار خواهد شد.",
    },
    {
      question: "امتیازات چگونه محاسبه می‌شوند؟",
      answer:
        "امتیازات بر اساس فعالیت‌های مختلف شما محاسبه می‌شوند. هرچه بیشتر فعالیت کنید، <b>امتیاز </b> بیشتری جمع‌آوری خواهید کرد و <b>شانس </b> شما برای برنده شدن در قرعه‌کشی بیشتر خواهد شد.",
    },
    {
      question: "طرح در چه بازه زمانی برگزار می‌شود؟",
      answer: "این طرح از تاریخ <b>1 دی تا 31 خرداد 1404 </b> برگزار می‌شود.",
    },
    {
      question: "آیا قرعه‌کشی به صورت استانی برگزار می‌شود؟",
      answer:
        "بله، این قرعه‌کشی به صورت استانی برگزار می‌شود و در هر استان یک دستگاه پژو 207 اتوماتیک به برندگان خوش‌شانس اهدا خواهد شد. برندگان هر استان به صورت جداگانه انتخاب می‌شوند.",
    },
    {
      question: "چگونه از امتیاز خود مطلع شوم؟",
      answer: "جهت اطلاع از امتیاز خود کد دستوری *10*60# را شماره‌گیری کنید.",
    },
  ];

  const FaqImagePath = "/images/207prize-faq.png"; // مسیر مستقیم به تصویر در پوشه public

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="md:flex md:flex-row-reverse md:items-start">
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-right">
              سوالات متداول:
            </h2>
            <div className="bg-white shadow-md rounded-lg">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-12 flex justify-center">
            <div className="bg-gray-200 rounded-lg shadow-lg w-full max-w-xs aspect-w-9 aspect-h-16 flex items-center justify-center">
              {/* استفاده از مسیر مستقیم */}
              <img
                src={FaqImagePath}
                alt="سوالات متداول"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
