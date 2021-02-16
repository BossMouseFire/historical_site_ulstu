import React from "react";
import "./quizWindow.scss";
import startPage from "../imgQuiz/districts/startImg.jpg";
import testImg from "../imgQuiz/districts/inzensky_district.jpg";

import districts from "./districtsInfo.json";
class QuizWindow extends React.Component {
  render() {
    const district = this.props.district
      ? this.props.district
      : "Выберете район Ульяновской области на карте, чтобы узнать больше исторических фактов о нём.";
    const districtStyle = this.props.district ? "title" : "titleDefault";
    const imgDistrict = this.props.district ? testImg : startPage;
    const imgstyle = this.props.district ? "imgWindow" : "imgDefaultWindow";
    const text = this.props.district
      ? districts[this.props.district]["districtDescription"]
      : "Ульяновская область — субъект Российской Федерации, входит в состав Приволжского федерального округа. Административный центр — город Ульяновск. Область на востоке граничит с Самарской областью, на юге — с Саратовской областью, на западе — с Пензенской областью и Республикой Мордовия, на севере — с Чувашской Республикой и Республикой Татарстан. Образована 19 января 1943 года Указом Президиума Верховного Совета СССР. Ульяновская область включает в себя 21 район: Базарносызганский, Барышский, Вешкаймский, Инзенский, Карсунский, Кузоватовский, Майнский, Мелекесский, Николаевский, Новомалыклинский, Новоспасский, Павловский, Радищевский, Сенгилеевский, Старокулаткинский, Старомайнский, Сурский, Тереньгульский, Ульяновский, Цильнинский и Чердаклинский районы.";
    return (
      <div className="window">
        <div className={districtStyle}>
          <p>{district}</p>
        </div>
        <div className={imgstyle}>
          <img src={imgDistrict} alt="фото региона" />
        </div>
        <div className="textWindow">
          <p>{text}</p>
        </div>
      </div>
    );
  }
}
export default QuizWindow;
