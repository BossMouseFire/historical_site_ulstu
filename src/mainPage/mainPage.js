import React from "react";
import "./mainPage.css";
import emblem from '../img/emblem.svg'
class MainPage extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="emblem">
            <img src={emblem}/>
          </div>
          <div className="buttonsSelect">
            <button>ФЛОРА И ФАУНА</button>
            <button>ИСТОРИЯ</button>
            <button>ДОСТОПРИМЕЧАТЕЛЬНОСТИ</button>
            <button>ВИКТОРИНА</button>
            <button>ИЗВЕСТНЫЕ ЛЮДИ</button>
          </div>
          <div className="changeLanguage">
            <button>RU</button>
          </div>
        </nav>
        <nav className="authorsInfo">
          <p>
            © Сайт создан студентами УлГТУ, Абаниным Данилом, Курмыза Павлом,
            Ильбековым Дмитрием, 2021 г.
          </p>
        </nav>
      </div>
    );
  }
}
export default MainPage;
