import React from "react";
import "./App.scss";
import Quiz from "../quiz/quiz";
import GreatPeople from "../greatPeople/greatPeople";
import Attractions from "../attractions/attractions";
import History from "../history/history";
import Modal from "./modalAbout/modal";
class App extends React.Component {
  state = {
    history: false,
    attractions: false,
    map: false,
    greatPeople: false,
    modal: false,
  };

  componentDidMount() {
    if (!localStorage.getItem("viewModal")) {
      this.stateModal(true);
      localStorage.setItem("viewModal", true);
    }
    if(localStorage.getItem("section")) {
      this.setState({
        [localStorage.getItem("section")]: true
      })
    }
    else{
      this.setState({
        attractions: true
      })
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
      {
        localStorage.setItem("section", section);
        this.setState({
          [section]: true,
        })
      }
    );
  };
  changeStyleModal = () => {
    const modal = document.querySelector(".modalContainer");
    if (this.state.modal === false) modal.style.display = "flex";
  };
  stateModal = (state) => {
    this.changeStyleModal();
    setTimeout(() => {
      this.setState(
        {
          modal: state,
        },
        () => {
          setTimeout(() => {
            if (this.state.modal) {
              document.body.style.overflow = "hidden";
            } else {
              const modal = document.querySelector(".modalContainer");
              document.body.style.overflow = "";
              modal.style.display = "none";
            }
          }, 400);
        }
      );
    }, 10);
  };

  changeStateProps = (section) => {
    this.stateModal(false);
    this.changeState(section);
  };
  render() {
    const emblem = "/images/other/emblem.svg";
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
          <Quiz stateModal={this.state.modal} />
        ) : this.state.greatPeople ? (
          <GreatPeople stateModal={this.state.modal} />
        ) : this.state.attractions ? (
          <Attractions />
        ) : (
          <History />
        )}
        <Modal
          isOpen={this.state.modal}
          changePage={this.changeStateProps}
          stateModal={this.stateModal}
        />
        <nav className="authorsInfo">
          <p>© Сайт создан студентами УлГТУ</p>
          <p onClick={() => this.stateModal(true)}>О сайте</p>
        </nav>
      </div>
    );
  }
}
export default App;
