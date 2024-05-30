import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

const FlipSquares = () => {
  const containerRef = useRef(null);
  const squaresRef = useRef([]);

  useEffect(() => {
    const squares = squaresRef.current;

    function doFlip() {
      // Get the initial state
      const state = Flip.getState(squares);

      // Make DOM or styling changes (swap the squares in our case)
      swap(squares);

      // Animate from the initial state to the end state
      Flip.from(state, { duration: 2, ease: "power1.inOut" });
    }

    // Given an Array of two siblings, append the one that's first so it's last (swap)
    function swap([a, b]) {
      a.parentNode.children[0] === a
        ? a.parentNode.appendChild(a)
        : a.parentNode.appendChild(b);
    }

    // Add click event listener
    document.addEventListener("click", doFlip);

    // Cleanup function to remove event listener on component unmount
    return () => {
      document.removeEventListener("click", doFlip);
    };
  }, []);

  return (
    <div ref={containerRef} className="flex items-center justify-center">
      <div ref={(el) => (squaresRef.current[0] = el)} className="w-10 h-10 bg-black">
        Square 1
      </div>
      <div ref={(el) => (squaresRef.current[1] = el)} className="w-10 h-10 bg-black">
        Square 2
      </div>
    </div>
  );
};

export default FlipSquares;
