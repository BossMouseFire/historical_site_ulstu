import React, { Component } from "react";
import "./history.scss";
import HistoryArrow from "./arrowHistory";
import ImenCulture from "./imenkovskayaCulture/imenCulture";
import BulgaroPeriod from "./bulgaroPeriod/bulgaroPeriod";
import SimbirskayaLine from "./simbirskayaLine/simbirskayaLine";
import SimbirskProvince from "./simbirskProvince/simbirskProvince";
import SimbirskGuberniya from "./simbirskayaGuberniya/simbirskGuberniya";
import UlskGubernia from "./ulskGubernia/ulskGubernia";
import UlskRegion from "./ulskRegion/ulskRegion";
class History extends Component {
  componentDidMount() {
    document.querySelectorAll(".epoch")[0].classList.add("active");
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    const scrollDistance = window.scrollY;
    document.querySelectorAll(".epochSelection").forEach((element, i) => {
      if (
        element.offsetTop - document.querySelector("nav").clientHeight * 1.5 <=
        scrollDistance
      ) {
        document.querySelectorAll(".epoch").forEach((el) => {
          if (el.classList.contains("active")) {
            el.classList.remove("active");
          }
        });
        document.querySelectorAll(".epoch")[i].classList.add("active");
      }
    });
  };
  render() {
    return (
      <div>
        <HistoryArrow />
        <div className="historyContainer">
          <div className="titleContainer">
            Краткая история Ульяновской области
          </div>
          <ImenCulture />
          <BulgaroPeriod />
          <SimbirskayaLine />
          <SimbirskProvince />
          <SimbirskGuberniya />
          <UlskGubernia />
          <UlskRegion />
        </div>
      </div>
    );
  }
}

export default History;
