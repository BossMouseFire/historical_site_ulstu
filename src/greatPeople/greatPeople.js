import React from "react";
import "./greatPeople.scss";
import Carousel from "./carousel/carousel";
import greatePeople from "./famousPeople.json";
import leftArrow from "./left_icon.svg";
import rightArrow from "./right_icon.svg";
class GreatPeople extends React.Component {
  state = {
    prevSlide: 0,
    slide: 1,
    nextSlide: 2,
    stateSlide: undefined,
  };

  changeSlide = (state) => {
    if (state === "next") {
      this.setState({
        prevSlide: this.state.prevSlide + 1 > 6 ? 0 : this.state.prevSlide + 1,
        slide: this.state.slide + 1 > 6 ? 0 : this.state.slide + 1,
        nextSlide: this.state.nextSlide + 1 > 6 ? 0 : this.state.nextSlide + 1,
        stateSlide: "next",
      });
    } else {
      this.setState({
        prevSlide: this.state.prevSlide - 1 < 0 ? 6 : this.state.prevSlide - 1,
        slide: this.state.slide - 1 < 0 ? 6 : this.state.slide - 1,
        nextSlide: this.state.nextSlide - 1 < 0 ? 6 : this.state.nextSlide - 1,
        stateSlide: "prev",
      });
    }
  };
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="blockName">
          <p>Известные уроженцы Ульяновской области</p>
        </div>
        <div className="arrow">
          <img
            src={leftArrow}
            alt="стрелка"
            onClick={() => this.changeSlide("prev")}
          />
          <img
            src={rightArrow}
            alt="стрелка"
            onClick={() => this.changeSlide("next")}
          />
        </div>
        <Carousel
          slide={this.state.stateSlide}
          name1={greatePeople["people"][this.state.prevSlide]["name"]}
          path1={greatePeople["people"][this.state.prevSlide]["imgPath"]}

          name2={greatePeople["people"][this.state.slide]["name"]}
          path2={greatePeople["people"][this.state.slide]["imgPath"]}
          biography2={greatePeople["people"][this.state.slide]["biography"]}
          url2={greatePeople["people"][this.state.slide]["url"]}

          name3={greatePeople["people"][this.state.nextSlide]["name"]}
          path3={greatePeople["people"][this.state.nextSlide]["imgPath"]}
          biography3={greatePeople["people"][this.state.nextSlide]["biography"]}
        />
        <div className="blockInfo">
          <hr />
          <p>НАВЕДИТЕ НА КАРТОЧКУ С УРОЖЕНЦЕМ, ЧТОБЫ УЗНАТЬ ЕГО БИОГРАФИЮ</p>
        </div>
      </div>
    );
  }
}
export default GreatPeople;
