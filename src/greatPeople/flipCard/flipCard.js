import React from "react";
import "./flipCard.scss";
class FlipCard extends React.Component {
  aboutHuman = () => {
    let url = this.props.url;
    window.open(url);
  };
  render() {
    return (
      <div class="flip-card" style={this.props.test}>
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={"/images/greatPeople/" + this.props.img} alt="Avatar" />
            <p>{this.props.text}</p>
          </div>
          <div class="flip-card-back">
            <p>{this.props.biography}</p>
            <button className="buttonCard" onClick={this.aboutHuman}>
              Узнать подробнее
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default FlipCard;
