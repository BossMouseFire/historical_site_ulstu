import React, { Component } from "react";
import "./attractions.scss";
import { attractions } from "./attractions.json";
import AttractionBlock from "./attractionBlock/attractionBlock";

class Attractions extends Component {
  backgroundAttraction = React.createRef();
  buttonScroll = React.createRef();
  scrollUp = () => {
    this.backgroundAttraction.current.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    this.arrowUp();
    this.animateAttraction();
  };
  animateAttraction = () => {
    const animItems = document.querySelectorAll(".animItem");

    animItems.forEach((item) => {
      const animItemHeight = item.offsetHeight;
      const animItemOffset = this.getCoords(item).top;
      const animStart = 6;
      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        window.pageYOffset > animItemOffset - animItemPoint &&
        window.pageYOffset < animItemOffset + animItemHeight
      ) {
        item.classList.add("active");
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
  arrowUp = async () => {
    if (window.pageYOffset + 250 > document.documentElement.clientHeight) {
      this.buttonScroll.current.style.display = "block";
      setTimeout(() => (this.buttonScroll.current.style.opacity = 1), 0);
    } else {
      if (this.buttonScroll.current.style.opacity === "1") {
        this.buttonScroll.current.style.opacity = 0;
        setTimeout(
          () => (this.buttonScroll.current.style.display = "none"),
          700
        );
      }
    }
  };
  render() {
    return (
      <div>
        <div
          className="generalInformation"
          style={{
            background: `url('/images/attractions/background.jpg')`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPositionY: "50%",
          }}
          ref={this.backgroundAttraction}
        >
          <p>Культурный гид по Ульяновской области!</p>
          <p>
            Ульяновская область – это настоящий кладезь значимых для России
            музейных экспозиций, многочисленных культурных
            достопримечательностей, связанных с жизнью и деятельностью многих
            великих людей.
          </p>
          <p>
            К сожалению, за один день посетить все достопримечательности
            Ульяновской области не представляется возможным, и поэтому мы
            собрали их на этом сайте. Предлагаем Вам отправиться в путешествие
            по самым известным местам нашего края!
          </p>
          <div class="arrowDown">
            <img src={"/images/other/arrowDown.svg"} alt="стрелка вниз" />
          </div>
        </div>
        <div
          className="arrowUp"
          onClick={this.scrollUp}
          ref={this.buttonScroll}
        >
          <img src={"/images/other/verticalArrow.svg"} alt="стрелка вверх" />
        </div>
        {attractions.map((attraction, key) => (
          <AttractionBlock
            title={attraction.title}
            imagesPaths={attraction.images}
            mainPart1={attraction.topParagraph}
            mainPart2={attraction.bottomParagraph}
            url={attraction.url}
            style={
              key === 0
                ? { marginTop: "50vw" }
                : key === 8
                ? { marginBottom: "5vw" }
                : {}
            }
          />
        ))}
      </div>
    );
  }
}
export default Attractions;
