import React from "react";
import "./quizWindow.scss";

import districts from "./districtsInfo.json";
class QuizWindow extends React.Component {
  aboutDistrict = () => {
    let url = districts[this.props.district]["url"];
    window.open(url);
  };
  render() {
    const district = districts[this.props.district]["district"];
    const imgDistrict = districts[this.props.district]["imgPath"];
    const text = districts[this.props.district]["districtDescription"];
    return (
      <div className="window">
        <div className="title">
          <p>{district}</p>
        </div>
        <div className="imgBlock">
          <img
            src={"/images/" + imgDistrict}
            alt="фото региона"
            className="imgWindow"
          />
          <p className="textWindow">{text}</p>
        </div>

        <button className="buttonBlock" onClick={this.aboutDistrict}>
          Узнать подробнее
        </button>
      </div>
    );
  }
}
export default QuizWindow;
