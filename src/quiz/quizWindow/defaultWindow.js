import React from "react";
import "./quizWindow.scss";
import { Spring } from "react-spring/renderprops";
class DefaultWindow extends React.Component {
  render() {
    const district =
      "Выберете район Ульяновской области на карте, чтобы узнать больше исторических фактов.";
    const text =
      "Ульяновская область включает в себя 21 район: Базарносызганский, Барышский, Вешкаймский, Инзенский, Карсунский, Кузоватовский, Майнский, Мелекесский, Николаевский, Новомалыклинский, Новоспасский, Павловский, Радищевский, Сенгилеевский, Старокулаткинский, Старомайнский, Сурский, Тереньгульский, Ульяновский, Цильнинский и Чердаклинский районы.";
    return (
      <Spring
        from={{
          opacity: 0,
        }}
        to={{
          opacity: 1,
        }}
        config={{ duration: 700 }}
      >
        {(props) => (
          <div className="window" style={props}>
            <div className="titleDefault">
              <p>{district}</p>
            </div>
            <div className="imgDefaultWindow">
              <img
                src={"/images/districts/defaultPhoto.jpg"}
                alt="фото региона"
              />
            </div>
            <div className="textDefaultWindow">
              <p>{text}</p>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}
export default DefaultWindow;
