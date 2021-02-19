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
      <div>
        {this.props.pastDistrict && this.props.pastDistrict !== this.props.district ? (
          <Spring
            from={{
              transform: "translate3d(0, 0%,0)",
              opacity: 1,
              height: "30%",
            }}
            to={{
              transform: "translate3d(0, 100%,0)",
              opacity: 0,
              height: "0%",
            }}
            reset={true}
            config={{ duration: 1000 }}
          >
            {(props) => (
              <div className="window" style={props}>
                <div className="title">
                  <p>{districts[this.props.pastDistrict]["district"]}</p>
                </div>
                <div className="imgBlock">
                  <img
                    src={"/images/districts/" + districts[this.props.pastDistrict]["imgPath"]}
                    alt="фото региона"
                    className="imgWindow"
                  />
                  <p className="textWindow">{districts[this.props.pastDistrict]["districtDescription"]}</p>
                </div>

                <button className="buttonBlock" onClick={this.aboutDistrict}>
                  Узнать подробнее
                </button>
              </div>
            )}
          </Spring>
        ) : null}
        <Spring
          from={{ transform: "translate3d(0, -100%,0)", opacity: -1 }}
          to={{ transform: "translate3d(0, 0%,0)", opacity: 1 }}
          reset={true}
          config={{ duration: 850 }}
        >
          {(props) => (
            <div className="window" style={props}>
              <div className="title">
                <p>{district}</p>
              </div>
              <div className="imgBlock">
                <img
                  src={"/images/districts/" + imgDistrict}
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
      </div>
    );
  }
}
export default QuizWindow;
