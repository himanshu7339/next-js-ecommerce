import React from "react";
import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";
import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.jpg";
import image6 from "../assets/img6.jpg";
import Image from "next/image";
import Typewriting from "../clientComponents/Typewriting";

const Home = () => {
  return (
    <div className="home">
      <div className="image_container">
        <div className="typewrting_container">
          <Typewriting />
        </div>
      </div>

      <div className="product_conatiner">
        <h1>Feature Proudct</h1>
      </div>
    </div>
  );
};

export default Home;
