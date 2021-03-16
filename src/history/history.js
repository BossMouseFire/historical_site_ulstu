import React, { Component } from "react";
import "./history.scss";
import HistoryArrow from "./arrowHistory";
import SimbirskayaLine from "./simbirskayaLine/simbirskayaLine";
import SimbirskProvince from "./simbirskProvince/simbirskProvince";
import SimbirskGuberniya from "./simbirskayaGuberniya/simbirskGuberniya";
import UlskGubernia from "./ulskGubernia/ulskGubernia";
import UlskRegion from "./ulskRegion/ulskRegion";
class History extends Component {
  epochRef = React.createRef();
  componentDidMount() {
    document.querySelectorAll(".epoch")[0].classList.add("active");
    document.querySelectorAll('.epochDates')[0].classList.add('epochDatesActive');
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
   this.animateArrow();
   this.animateEpochDates();
  };
  animateArrow = () => {
    const scrollDistance = window.scrollY;
    document.querySelectorAll(".epochSelection").forEach((element, i) => {
      if (
        element.offsetTop - document.querySelector("nav").clientHeight * 1.5 <=
        scrollDistance
      ) {
        document.querySelectorAll(".epoch").forEach((el, index) => {
          if (el.classList.contains("active")) {
            el.classList.remove("active");
          }
        });
        document.querySelectorAll(".epoch")[i].classList.add("active");
      }
    });
  }
  animateEpochDates = () => {
    const animItems = document.querySelectorAll(".epochSelection");
    const epochDates = document.querySelectorAll(".epochDates");
    animItems.forEach((item, index) => {
      const animItemHeight = item.offsetHeight;
      const animItemOffset = this.getCoords(item).top;
      const animStart = 1.04;
      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        window.pageYOffset > animItemOffset - animItemPoint &&
        window.pageYOffset < animItemOffset + animItemHeight
      ) {
        epochDates.forEach((el) => {
          if (el.classList.contains("epochDatesActive")) {
            el.classList.remove("epochDatesActive");
          }
        });
        epochDates[index].classList.add("epochDatesActive");
      }
    });
  };
  getCoords = (elem) => {
    const box = elem.getBoundingClientRect(),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: box.top + scrollTop,
    };
  };
  render() {
    return (
      <div>
        <HistoryArrow />
        <div className="historyContainer">
          <div className="titleContainer">
            Краткая история Ульяновской области
          </div>
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
