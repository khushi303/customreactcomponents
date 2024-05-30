import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import DashboardHeader from "../components/DashboardHeader";
// import './App.css'; // Import CSS file for styling

const HomePage = () => {
  const quoteRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);

  const tl = useRef(gsap.timeline());

  useEffect(() => {
    quoteRefs.current.forEach((quoteRef, index) => {
      const quote = quoteRef.current;
      const text = quote.innerText;
      quote.innerHTML = ""; // Clear the existing text
      const chars = text.split("").map((char, i) => {
        const span = document.createElement("span");
        span.innerText = char;
        span.style.display = "inline-block";
        quote.appendChild(span);
        return span;
      });
      console.log(chars);

      gsap.set(quote, { perspective: 400 });

      tl.current.from(chars, {
        duration: 0.5,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.01,
        // Animation for color change
        color: "#000", // Starting color (React blue)
        onComplete: () => {
          gsap.to(chars, {
            duration: 0.2,
            color: "#EC6707 ", // Ending color (white)
            stagger: 0.1,
          });
        },
      });
    });
  }, []);

  const handleClick = () => {
    tl.current.restart();
  };
  return (
    <>
      <div className="min-h-screen relative lg:w-[calc(100%-256px)] sm:w-[calc(100%-180px)] w-[calc(100%-60px)] ml-auto bg-white">
        <div className="lg:h-[85px] sm:h-[60px] h-[40px] bg-white">
          <DashboardHeader />
        </div>
        <div className="lg:max-h-[calc(100vh-85px)] sm:max-h-[calc(100vh-60px)] max-h-[calc(100vh-40px)] w-full overflow-auto">
          <div className="flex flex-col lg:min-h-[calc(100vh-85px)] sm:min-h-[calc(100vh-60px)] min-h-[calc(100vh-40px)] items-center justify-center h-full gap-1 px-3 sm:gap-4 bg-[#F5F5F5]">
            <h2
              ref={quoteRefs.current[0]}
              className="text-2xl font-semibold tracking-widest text-center text-black md:text-6xl sm:text-5xl"
            >
              React
            </h2>
            <h2
              ref={quoteRefs.current[1]}
              className="text-2xl font-semibold tracking-widest text-center text-black md:text-6xl sm:text-5xl"
            >
              Important
            </h2>
            <h2
              ref={quoteRefs.current[2]}
              className="text-2xl font-semibold tracking-widest text-center text-black md:text-6xl sm:text-5xl"
            >
              Topics
            </h2>
            <button id="animate" onClick={handleClick} className="hidden">
              Animate
            </button>
          </div>
          <div className="flex flex-col lg:min-h-[calc(100vh-85px)] sm:min-h-[calc(100vh-60px)] min-h-[calc(100vh-40px)] items-center justify-center h-full gap-1 px-3 sm:gap-4 bg-[#F5F5F5]">
            <h2 className="text-2xl font-semibold tracking-widest text-center text-black md:text-6xl sm:text-4xl">
              React
            </h2>
            <h2 className="text-2xl font-semibold tracking-widest text-center text-black md:text-6xl sm:text-4xl">
              Important
            </h2>
            <h2 className="text-2xl font-semibold tracking-widest text-center text-black md:text-6xl sm:text-4xl">
              Topics
            </h2>
            <button id="animate" onClick={handleClick} className="hidden">
              Animate
            </button>
          </div>
          <div className="flex flex-col lg:min-h-[calc(100vh-85px)] sm:min-h-[calc(100vh-60px)] min-h-[calc(100vh-40px)] items-center justify-center h-full gap-1 px-3 sm:gap-4 bg-[#F5F5F5]">
            <h2 className="text-2xl font-semibold tracking-widest text-center text-black md:text-6xl sm:text-4xl">
              React
            </h2>
            <h2 className="text-2xl font-semibold tracking-widest text-center text-black md:text-6xl sm:text-4xl">
              Important
            </h2>
            <h2 className="text-2xl font-semibold tracking-widest text-center text-black md:text-6xl sm:text-4xl">
              Topics
            </h2>
            <button id="animate" onClick={handleClick} className="hidden">
              Animate
            </button>
          </div>
          <div className="flex flex-col lg:min-h-[calc(100vh-85px)] sm:min-h-[calc(100vh-60px)] min-h-[calc(100vh-40px)] items-center justify-center h-full gap-1 px-3 sm:gap-4 bg-[#F5F5F5]">
            <h2 className="text-2xl font-semibold tracking-widest text-center text-black md:text-6xl sm:text-4xl">
              React
            </h2>
            <h2 className="text-2xl font-semibold tracking-widest text-center text-black md:text-6xl sm:text-4xl">
              Important
            </h2>
            <h2 className="text-2xl font-semibold tracking-widest text-center text-black md:text-6xl sm:text-4xl">
              Topics
            </h2>
            <button id="animate" onClick={handleClick} className="hidden">
              Animate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
