import React from "react";
import "./style.css";
import Banner from "../../Components/Banner";
import Register from "../../Components/Register";
import { FaAngleDown } from "react-icons/fa";

export default function Landing() {
  // let nextSection = React.useRef();
  // function scrollTo(ref) {
  //   if (!ref.current) return;
  //   ref.current.scrollIntoView({behavior: "smooth"});
  // }
  return (
    <div>
      <div className="landing-container">
        <Banner />
        {/* <FaAngleDown className='scroll-down-btn' onClick={() => scrollTo(nextSection)}/> */}
        {/* <Register ref={nextSection}/> */}
        <FaAngleDown className="scroll-down-btn" />
        <Register />
      </div>
    </div>
  );
}
