import React, { Component } from "react";
import "./attractions.scss";
import { attractions } from "./attractions.json";
import AttractionBlock from "./attractionBlock/attractionBlock";

class Attractions extends Component {
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

        {attractions.map((attraction, key) => (
          <AttractionBlock
            title={attraction.title}
            imagesPaths={attraction.images}
            mainPart1={attraction.topParagraph}
            mainPart2={attraction.bottomParagraph}
            url={attraction.url}
            style={key === 0 ? { marginTop: "48%" } : {}}
          />
        ))}
      </div>
    );
  }
}
export default Attractions;
