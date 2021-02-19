import React from "react";
import Map from "../quiz/map/map";
import QuizWindow from "./quizWindow/quizWindow";
import DefaultWindow from "./quizWindow/defaultWindow";
import "./quiz.scss";
import { Spring } from "react-spring/renderprops";

class Quiz extends React.Component {
  state = {
    district: undefined,
    pastDistrict: undefined,
  };

  updateDistrict = (value) => {
    if (value !== this.state.district) {
      this.setState({
        pastDistrict: this.state.district,
        district: value,
      });
    }
  };
  render() {
    return (
      <div>
        <Map updateDistrict={this.updateDistrict} />
        {this.state.district ? (
          <QuizWindow
            district={this.state.district}
            pastDistrict={this.state.pastDistrict}
          />
        ) : (
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {(props) => <DefaultWindow style={props} />}
          </Spring>
        )}
      </div>
    );
  }
}

export default Quiz;
