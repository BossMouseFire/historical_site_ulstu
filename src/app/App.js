import React from "react";
import "./App.css";
import emblem from "../img/emblem.svg";
import Quiz from "../quiz/quiz";
class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <img className="emblem" src={emblem} alt="герб Ульяновской области" />
          <button>ИСТОРИЯ</button>
          <button>ДОСТОПРИМЕЧАТЕЛЬНОСТИ</button>
          <button>ХРОНОКАРТА</button>
          <button>ВЫДАЮЩИЕСЯ ЗЕМЛЯКИ</button>
        </nav>
        <Quiz />
        <nav className="authorsInfo">
          <p>© Сайт создан студентами УлГТУ</p>
        </nav>
      </div>
    );
  }
}
export default App;
