import React, { useRef, useEffect } from "react";
import "./eyes.scss"; // Your CSS file for styling

const Eyes = () => {
  const eyesRef = useRef(null);

  useEffect(() => {
    const eyes = eyesRef.current;

    const moveEyes = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width } = eyes.getBoundingClientRect();
      const eyeWidth = width / 2;
      const mouseX = clientX - left - eyeWidth;
      const mouseY = clientY - top - eyeWidth;

      const leftEye = eyes.querySelector(".left-eye");
      const rightEye = eyes.querySelector(".right-eye");

      leftEye.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      rightEye.style.transform = `translate(${
        mouseX + eyeWidth * 2
      }px, ${mouseY}px)`;
    };

    document.addEventListener("mousemove", moveEyes);

    return () => {
      document.removeEventListener("mousemove", moveEyes);
    };
  }, []);

  return (
    <div className="eyes" ref={eyesRef}>
      <div className="eye left-eye"></div>
      <div className="eye right-eye"></div>
    </div>
  );
};

export default Eyes;
