import React from "react";
import "./App.css";
import emblem from "../img/emblem.svg";
import Quiz from "../quiz/quiz";
import GreatPeople from "../greatPeople/greatPeople";
import Attractions from "../attractions/attractions";
class App extends React.Component {
  state = {
    history: false,
    attractions: false,
    map: true,
    greatPeople: false,
  };
  changeState = (section) => {
    this.setState(
      {
        history: false,
        attractions: false,
        map: false,
        greatPeople: false,
      },
      () =>
        this.setState({
          [section]: true,
        })
    );
  };
  render() {
    return (
      <div>
        <nav className="navbar">
          <img className="emblem" src={emblem} alt="герб Ульяновской области" />
          <button onClick={() => this.changeState("history")}>ИСТОРИЯ</button>
          <button onClick={() => this.changeState("attractions")}>
            ДОСТОПРИМЕЧАТЕЛЬНОСТИ
          </button>
          <button onClick={() => this.changeState("map")}>ХРОНОКАРТА</button>
          <button onClick={() => this.changeState("greatPeople")}>
            ВЫДАЮЩИЕСЯ ЗЕМЛЯКИ
          </button>
        </nav>
        {this.state.map ? (
          <Quiz />
        ) : this.state.greatPeople ? (
          <GreatPeople />
        ) : (
          <Attractions />
        )}
        <nav className="authorsInfo">
          <p>© Сайт создан студентами УлГТУ</p>
        </nav>
      </div>
    );
  }
}
export default App;
