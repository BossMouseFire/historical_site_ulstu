import React from "react";
import Map from "../quiz/map/map";
import QuizWindow from "./quizWindow/quizWindow";
import DefaultWindow from "./quizWindow/defaultWindow";
class Quiz extends React.Component {
  state = {
    district: undefined,
    pastDistrict: undefined,
    stateAnimate: this.props.stateModal,
    break: 0,
  };

  componentDidUpdate() {
    if (this.props.stateModal === true && this.state.break === 0) {
      this.setState({
        stateAnimate: false,
        break: 1,
      });
    }
  }
  updateDistrict = (value) => {
    if (value !== this.state.district) {
      this.setState({
        pastDistrict: this.state.district,
        district: value,
        stateAnimate: true,
        break: 0,
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
            stateAnimate={this.props.stateModal === true && this.state.break === 0 ? false : this.state.stateAnimate}
          />
        ) : (
          <DefaultWindow />
        )}
      </div>
    );
  }
}

export default Quiz;
