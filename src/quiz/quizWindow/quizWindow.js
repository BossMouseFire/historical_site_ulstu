import React from "react";
import "./quizWindow.scss";
import { Transition } from "react-spring/renderprops";

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
    const items = [1, 2, 3, 4];
    return (
      <Transition
        items={items}
        keys={(item) => item.key}
        from={{ transform: "translate3d(0,-40px,0)" }}
        enter={{ transform: "translate3d(0,0px,0)" }}
        leave={{ transform: "translate3d(0,-40px,0)" }}
      >
        {(item) => (props) => <div style={props}>{item.text}</div>}
      </Transition>
    );
  }
}
export default QuizWindow;
