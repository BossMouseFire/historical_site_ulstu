import React from "react";
import Map from "../quiz/map/map";
import QuizWindow from "./quizWindow/quizWindow";
import DefaultWindow from "./quizWindow/defaultWindow";
import { Spring } from "react-spring/renderprops";
import "./quiz.scss";
class Quiz extends React.Component {
  state = {
    district: "",
  };

  updateDistrict = (value) => {
    this.setState({
      district: value,
    });
  };
  render() {
    return (
      <div>
        <Map updateDistrict={this.updateDistrict} />
        {this.state.district ? (
          <QuizWindow district={this.state.district} test={false}/>
        ) : (
          <DefaultWindow />
        )}
      </div>
    );
  }
}

export default Quiz;
