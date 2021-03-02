import React, { Component } from "react";
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

  photoSlider = React.createRef();

  goToNextSlide = () => {
    const { position, array } = this.state;
    let width = this.photoSlider.current.width;
    const newPosition = position === array.length - 1 ? 0 : position + 1;
    this.setState({
      position: newPosition,
      width: width * newPosition,
    });
  };
  goToPrevSlide = () => {
    const { position, array } = this.state;
    let width = this.photoSlider.current.width;
    const newPosition = position === 0 ? array.length - 1 : position - 1;
    this.setState({
      position: newPosition,
      width: width * newPosition,
    });
  };

  aboutAttraction = () => {
    const url = this.props.url;
    window.open(url);
  };
  render() {
    const { style, title, mainPart1, mainPart2 } = this.props;
    const { array, width } = this.state;
    return (
      <div class="attraction" style={style}>
        <div className="title">
          <p>{title}</p>
          <hr />
        </div>
        <div className="mainPart">
          <p>{mainPart1}</p>
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
            transform: `translateX(-${width * 1.725}px)`,
          }}
        >
          {array.map((item) => (
            <div>
              <img
                src={"/images/attractions/" + item.path}
                alt="картинка"
                ref={this.photoSlider}
              />
              <hr />
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mainPart">
          <p>{mainPart2}</p>
        </div>
        <button className="buttonAttraction" onClick={this.aboutAttraction}>
          Узнать подробнее про {this.props.title}
        </button>
      </div>
    );
  }
}
export default AttractionBlock;
