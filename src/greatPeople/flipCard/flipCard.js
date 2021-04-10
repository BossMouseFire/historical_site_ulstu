import React from "react";
import "./flipCard.scss";
class FlipCard extends React.Component {
  aboutHuman = () => {
    let url = this.props.url;
    window.open(url);
  };
  render() {
    return (
      <div className={this.props.classChildren ? `flip-card ${this.props.classChildren}` : `flip-card`} style={this.props.style}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={"/images/greatPeople/" + this.props.img} alt="Avatar" />
            <p style={this.props.p_style}>{this.props.text}</p>
          </div>
          <div className="flip-card-back">
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
