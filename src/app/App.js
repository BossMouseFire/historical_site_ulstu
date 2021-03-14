import React from "react";
import "./App.scss";
import Quiz from "../quiz/quiz";
import GreatPeople from "../greatPeople/greatPeople";
import Attractions from "../attractions/attractions";
import History from "../history/history"
import Modal from "./modalAbout/modal";
class App extends React.Component {
  state = {
    history: false,
    attractions: true,
    map: false,
    greatPeople: false,
    modal: false,
  };

  componentDidMount() {
    if (!localStorage.getItem("viewModal")) {
      this.stateModel();
      localStorage.setItem("viewModal", true);
    }
  }

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
  stateModal = (state) => {
    this.setState(
      {
        modal: state,
      },
      () => {
        if (this.state.modal) {
          document.body.style.overflow = "hidden";
        } else document.body.style.overflow = "";
      }
    );
  };

  changeStateProps = (section) => {
    this.stateModal();
    this.changeState(section);
  };
  render() {
    const emblem = "/images/other/emblem.svg"
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
          <Quiz stateModal={this.state.modal}/>
        ) : this.state.greatPeople ? (
          <GreatPeople stateModal={this.state.modal}/>
        ) : this.state.attractions ? (
          <Attractions />
        ) : <History/>}
        <Modal
          isOpen={this.state.modal}
          changePage={this.changeStateProps}
          stateModal={this.stateModal}
        />
        <nav className="authorsInfo">
          <p>© Сайт создан студентами УлГТУ</p>
          <p onClick={() => this.stateModal(true)}>О нас</p>
        </nav>
      </div>
    );
  }
}
export default App;
