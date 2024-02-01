import React from "react";
import "./style.css";
import Banner from "../../Components/Banner";
// import Register from "../../Components/Register";
import { FaAngleDown } from "react-icons/fa";

export default function Landing() {
  const scrollToNextSection = () => {
    const registerElement = document.getElementById("nextSection");

    if (registerElement) {
      registerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="landing-container">
        <Banner />
        <div className="scroll-down-container">
        <FaAngleDown className="scroll-down-btn" id="nextSection" onClick={scrollToNextSection}/>
        </div>
        {/* <Register /> */}
      </div>
    </div>
  );
}
