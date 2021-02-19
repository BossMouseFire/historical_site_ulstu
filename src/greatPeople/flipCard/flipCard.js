import React from "react";
import goncharov from "./goncharov.jpg";
import "./flipCard.scss";
class FlipCard extends React.Component {
  render() {
    return (
      <div class="wrap">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src={goncharov} alt="Avatar" />
              <p>Иван Александрович Гончаров</p>
            </div>
            <div class="flip-card-back">
              <h1>Иван Александрович Гончаров</h1>
              <p>ПЕЗДЕЦТУТТЕКСТАПЕЗДЕЦТУТТЕКСТАПЕЗДЕЦТУТТЕКСТА</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FlipCard;
