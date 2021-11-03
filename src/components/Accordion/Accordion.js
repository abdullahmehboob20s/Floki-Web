import React from "react";
import "./Accordion.css";
import downArrow from "assets/images/down-arrow.png";

function Accordion(props) {
  let [open, setOpen] = React.useState(false);
  let accordionBodyRef = React.useRef();

  const toggleAccordionBody = () => {
    let accBody = accordionBodyRef.current;

    if (accBody.offsetHeight == 0) {
      accBody.style.height = accBody.scrollHeight + "px";
      setOpen(true);
    } else {
      accBody.style.height = 0;
      setOpen(false);
    }
  };

  return (
    <div className="accordion">
      <div
        className={`accordion-btn fs-19px yellow weight-9 ${
          open ? "open" : ""
        }`}
        onClick={toggleAccordionBody}
      >
        <img src={downArrow} alt="" />
        {props.title}
      </div>
      <div className="accordion-body-wrapper" ref={accordionBodyRef}>
        <div className="accordion-body gray fs-16px weight-6 ">
          On June of 25th, 2021 Elon Musk AKA DogeFather tweeted "My Shiba Inu
          will be named Floki" and from there the idea of creating the Floki Inu
          came into existence.
        </div>
      </div>
    </div>
  );
}

export default Accordion;
