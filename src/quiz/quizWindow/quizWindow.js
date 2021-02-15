import React from 'react'
import './quizWindow.scss'
import startPage from '../imgQuiz/districts/startImg.jpg'
import testImg from '../imgQuiz/districts/test.jpg'
class QuizWindow extends React.Component{
    render(){
        const district = this.props.district ? this.props.district : 'Выберете район Ульяновской области на карте, чтобы узнать больше исторических фактов о нём.';
        const districtStyle = this.props.district ? 'title' : 'titleDefault';
        const imgDistrict = this.props.district ? testImg : startPage;
        const imgstyle = this.props.district ? 'imgWindow' : 'imgDefaultWindow';
        const text = this.props.district ?  'Россия – крупнейшая страна мира, расположенная в Восточной Европе и Северной Азии и омываемая водами Тихого и Северного Ледовитого океанов.': ' Ульяновская область лежит на востоке Восточно-Европейской равнины. Образована область 19 января 1943 года. По своей площади - 37,18 тысяч км2 - она находится на 37 месте среди 49 областей Российской Федерации. Её площадь больше площади некоторых европейских государств, например: Молдавии, Бельгии, Албании, Македонии, Словении, но немного меньше Нидерландов и Швейцарии.'
        return (
            <div className="window">
                <div className={districtStyle}>
                    <p>{district}</p>
                </div>
                <div className={imgstyle}>
                    <img src={imgDistrict} alt="фото региона"/>
                </div>
                <div className="textWindow">
                    <p>{text}</p>
                </div>
            </div>
        )
    }
}
export default QuizWindow;