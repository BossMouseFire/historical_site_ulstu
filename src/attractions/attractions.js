import React, { Component } from "react";
import "./attractions.scss";
import test from "./test7.jpg";
import downArrow from "./down_icon1.svg";
class Attractions extends Component {
  render() {
    return (
      <div>
        <div
          className="generalInformation"
          style={{
            background: `url(${test})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPositionY: "50%",
          }}
        >
          <p>Культурный гид по Ульяновской области!</p>
          <p>
            Ульяновск, а ранее Симбирск, не даром называют культурной столицей,
            ведь это настоящий город-музей под открытым небом, наполненный
            значимыми для России музейными экспозициями, своими многочисленными
            культурными достопримечательностями, связанными с жизнью и
            деятельностью многих великих людей.
          </p>
          <p>
            К сожалению, за один день посетить все достопримечательности
            Ульяновска не представляется возможным, и поэтому мы собрали их на
            этом сайте. Предлагаем Вам отправиться в путешествие по самым
            известным городским местам.
          </p>
          <img className="arrowDown" src={downArrow} alt="стрелка вниз" />
        </div>
        <div
          style={{
            backgroundColor: "red",
            width: "100px",
            height: "100px",
            marginTop: "50%",
          }}
        >
          fdfdfd
        </div>
      </div>
    );
  }
}
export default Attractions;
