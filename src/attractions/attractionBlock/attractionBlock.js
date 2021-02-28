import { Component } from "react";

import "./attractionBlock.scss";
class AttractionBlock extends Component {
  state = {
    position: 0,
    array: [],
    width: 0,
  };
  componentDidMount() {
    this.setState({
      array: this.props.imagesPaths,
    });
  }

  goToNextSlide = () => {
    const { position, array } = this.state;
    const elements = document.querySelectorAll("#test");
    let width = elements[position].width;
    const newPosition = position === array.length - 1 ? 0 : position + 1;
    this.setState(
      {
        position: newPosition,
        width: width * newPosition,
      },
      console.log(width)
    );
  };
  goToPrevSlide = () => {
    const { position, array } = this.state;
    const element = document.querySelectorAll("#test");
    let width = element[position].width;
    const newPosition = position === 0 ? array.length - 1 : position - 1;
    this.setState(
      {
        position: newPosition,
        width: width * newPosition,
      },
      () => console.log(this.state.width, this.state.position)
    );
  };
  render() {
    return (
      <div class="attraction" style={this.props.style}>
        <div className="title">
          <p>{this.props.title}</p>
          <hr />
        </div>
        <div className="mainPart">
          <p>{this.props.mainPart1}</p>
        </div>

        <div className="arrowAttraction">
          <img
            src={"/images/other/arrowGreatPeople.svg"}
            alt="стрелка"
            onClick={this.goToPrevSlide}
          />
          <img
            src={"/images/other/arrowGreatPeople.svg"}
            alt="стрелка"
            onClick={this.goToNextSlide}
          />
        </div>

        <div
          class="carouselAttraction"
          style={{
            transition: "transform ease 600ms",
            transform: `translateX(-${this.state.width * 1.737}px)`,
          }}
        >
          {this.state.array.map((item) => (
            <img src={"/images/attractions/" + item} alt="картинка" id="test" />
          ))}
        </div>

        <div className="mainPart">
          <p>{this.props.mainPart2}</p>
        </div>
        <button className="buttonAttraction" onClick={this.aboutHuman}>
          Узнать подробнее
        </button>
      </div>
    );
  }
}
export default AttractionBlock;
