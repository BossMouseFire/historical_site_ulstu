import React from "react";
import "./mainPage.css";
import emblem from '../img/emblem.svg'
import Map from './map/map'
class MainPage extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <img className="emblem" src={emblem} alt="герб Ульяновской области"/>
          <button>ФЛОРА И ФАУНА</button>
          <button>ИСТОРИЯ</button>
          <button>ДОСТОПРИМЕЧАТЕЛЬНОСТИ</button>
          <button>ВИКТОРИНА</button>
          <button>ИЗВЕСТНЫЕ ЛЮДИ</button>
          <div className="changeLanguage">
            <button>RU</button>
          </div>
        </nav>
        <Map/>
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
