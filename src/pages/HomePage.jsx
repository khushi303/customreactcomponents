import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import './App.css'; // Import CSS file for styling

const HomePage = () => {
    const quoteRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);
    const tl = useRef(gsap.timeline());

    useEffect(() => {
        quoteRefs.current.forEach((quoteRef, index) => {
            const quote = quoteRef.current;
            const text = quote.innerText;
            quote.innerHTML = ''; // Clear the existing text
            const chars = text.split('').map((char, i) => {
                const span = document.createElement('span');
                span.innerText = char;
                span.style.display = 'inline-block';
                quote.appendChild(span);
                return span;
            });

            gsap.set(quote, { perspective: 400 });

            tl.current.from(chars, {
                duration: 0.8,
                opacity: 0,
                scale: 0,
                y: 80,
                rotationX: 180,
                transformOrigin: "0% 50% -50",
                ease: "back",
                stagger: 0.01,
                // Animation for color change
                color: "#FFD93D", // Starting color (React blue)
                onComplete: () => {
                    gsap.to(chars, {
                        duration: 0.2,
                        color: "#fecac8 ", // Ending color (white)
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
        <div className='bg-slate-800 md:min-h-[calc(100vh-60px)] min-h-[calc(100vh-54px)] flex items-center justify-center'>
            <div className='container xl:max-w-[1164px] mx-auto px-3 flex flex-col justify-center gap-4'>
                <h2 ref={quoteRefs.current[0]} className='md:text-6xl sm:text-4xl text-2xl font-semibold text-white tracking-widest text-center' >
                    React
                </h2>
                <h2 ref={quoteRefs.current[1]} className='md:text-6xl sm:text-4xl text-2xl font-semibold text-white tracking-widest text-center' >
                    Important
                </h2>
                <h2 ref={quoteRefs.current[2]} className='md:text-6xl sm:text-4xl text-2xl font-semibold text-white tracking-widest text-center' >
                    Topics
                </h2>
                <button id="animate" onClick={handleClick} className='hidden'>Animate</button>
            </div>
        </div>
    );
};

export default HomePage;
