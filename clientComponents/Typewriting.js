"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const Typewriting = () => {
  const typeWritingText = ["Amazing e-commerce platform for everyone."];
  return (
    <Typewriter
      options={{
        strings: typeWritingText,
        autoStart: true,
        loop: true,
        wrapperClassName:"typewriterclass"
      }}
    />
  );
};

export default Typewriting;
