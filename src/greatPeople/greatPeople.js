import React from "react";
import "./greatPeople.scss";
import Carousel from "./carousel/carousel";
import greatePeople from "./famousPeople.json";
class GreatPeople extends React.Component {
  state = {
    prevSlide: 0,
    slide: 1,
    nextSlide: 2,
    stateSlide: undefined,
    stateAnimate: this.props.stateModal,
    break: 0,
  };
  componentDidUpdate() {
    if (this.props.stateModal === true && this.state.break === 0) {
      this.setState({
        stateAnimate: false,
        break: 1,
      });
    }
  }
  changeSlide = (state) => {
    if (state === "next") {
      this.setState({
        prevSlide: this.state.prevSlide + 1 > 19 ? 0 : this.state.prevSlide + 1,
        slide: this.state.slide + 1 > 19 ? 0 : this.state.slide + 1,
        nextSlide: this.state.nextSlide + 1 > 19 ? 0 : this.state.nextSlide + 1,
        stateSlide: "next",
        stateAnimate: true,
        break: 0,
      });
    } else {
      this.setState({
        prevSlide: this.state.prevSlide - 1 < 0 ? 19 : this.state.prevSlide - 1,
        slide: this.state.slide - 1 < 0 ? 19 : this.state.slide - 1,
        nextSlide: this.state.nextSlide - 1 < 0 ? 19 : this.state.nextSlide - 1,
        stateSlide: "prev",
        stateAnimate: true,
        break: 0,
      });
    }
  };
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="blockName">
          <p>Знаменитые уроженцы Ульяновской области</p>
        </div>
        <div className="arrow">
          <img
            src={"/images/other/arrowGreatPeople.svg"}
            alt="стрелка"
            onClick={() => this.changeSlide("prev")}
          />
          <img
            src={"/images/other/arrowGreatPeople.svg"}
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
          stateAnimate={
            this.props.stateModal === true && this.state.break === 0
              ? false
              : this.state.stateAnimate
          }
        />
        <div className="blockInfo">
          <div className="info">
            <hr />
            <p>
              Выберите симбирянина-ульяновца нажатиями на стрелочки и наведите
              на карточку, чтобы узнать больше.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default GreatPeople;
