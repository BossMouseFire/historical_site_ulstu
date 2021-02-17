import React from "react";
import "./quizWindow.scss";
import { Spring } from "react-spring/renderprops";
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
      <Spring
        from={{opacity: 0}}
        to={{opacity: 1}}
        config={{ duration: 1000 }}
        reset={true}
      >
        {(props) => (
          <div className="window" style={props}>
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
        )}
      </Spring>
    );
  }
}
export default QuizWindow;
