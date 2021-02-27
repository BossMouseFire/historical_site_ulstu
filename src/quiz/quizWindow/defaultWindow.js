import React from "react";
import "./quizWindow.scss";

class DefaultWindow extends React.Component {
  render() {
    const district =
      "Выберете район Ульяновской области на карте, чтобы узнать больше исторических фактов о нём.";
    const text =
      "Ульяновская область включает в себя 21 район: Базарносызганский, Барышский, Вешкаймский, Инзенский, Карсунский, Кузоватовский, Майнский, Мелекесский, Николаевский, Новомалыклинский, Новоспасский, Павловский, Радищевский, Сенгилеевский, Старокулаткинский, Старомайнский, Сурский, Тереньгульский, Ульяновский, Цильнинский и Чердаклинский районы.";
    return (
      <div className="window" style={this.props.style}>
        <div className="titleDefault">
          <p>{district}</p>
        </div>
        <div className="imgDefaultWindow">
          <img src={"/images/districts/defaultPhoto.jpg"} alt="фото региона" />
        </div>
        <div className="textDefaultWindow">
          <p>{text}</p>
        </div>
      </div>
    );
  }
}
export default DefaultWindow;
