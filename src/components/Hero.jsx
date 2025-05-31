import React, { useState, useEffect } from "react";

const sliderItems = [
  {
    desktopImage: "/images/hero1.jpg",
    mobileImage: "/images/hero1.jpg",
    alt: "اسلاید اول",
    title: "رنگ، سایت و لوگوتایپ جدید",
    buttonText: "هویت جدید",
    buttonLink: "#",
  },
  {
    desktopImage: "/images/hero2.jpg",
    mobileImage: "/images/hero2.jpg",
    alt: "اسلاید دوم",
    title: "پیشنهادهای شگفت انگیز",
    buttonText: "مشاهده پیشنهادها",
    buttonLink: "#",
  },
  {
    desktopImage: "/images/hero3.jpg",
    mobileImage: "/images/hero3.jpg",
    alt: "اسلاید سوم",
    title: "اینترنت پرسرعت همراه",
    buttonText: "بسته های اینترنت",
    buttonLink: "#",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (sliderItems.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === sliderItems.length - 1 ? 0 : prev + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);

  if (sliderItems.length === 0) return null;

  return (
    <div className="relative w-full h-[400px] md:h-[550px] lg:h-[calc(100vh-150px)] max-h-[700px] overflow-hidden">
      {sliderItems.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center ${
            index === currentSlide
              ? "opacity-100 z-10"
              : "opacity-0 pointer-events-none z-0"
          }`}
        >
          
          <img
            src={slide.desktopImage}
            alt={slide.alt}
            className="hidden md:block w-full h-full object-cover"
            draggable="false"
          />
          <img
            src={slide.mobileImage}
            alt={slide.alt}
            className="md:hidden w-full h-full object-cover"
            draggable="false"
          />
          <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center p-4">
            <div className="max-w-md lg:max-w-lg">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 md:mb-6">
                {slide.title}
              </h1>
              <a
                href={slide.buttonLink}
                className="group bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base font-semibold py-2.5 px-6 md:py-3 md:px-8 rounded-full transition-colors duration-300 inline-flex items-center shadow-lg gap-2"
              >
                {slide.buttonText}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 rtl:rotate-0 ltr:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    
      {sliderItems.length > 1 && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 rtl:space-x-reverse z-20">
          {sliderItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 border border-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                index === currentSlide
                  ? "bg-orange-500 scale-125 ring-2 ring-orange-300 ring-offset-1 ring-offset-black/30"
                  : "bg-white/70 hover:bg-white"
              }`}
              aria-label={`رفتن به اسلاید ${index + 1}`}
              type="button"
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hero;
