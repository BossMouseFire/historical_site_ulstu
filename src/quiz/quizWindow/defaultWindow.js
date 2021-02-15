import React from 'react'
import './quizWindow.scss'
import startPage from './defaultPhoto.jpg'
class DefaultWindow extends React.Component{

    render(){
        const district = 'Выберете район Ульяновской области на карте, чтобы узнать больше исторических фактов о нём.';
        const text = ' Ульяновская область лежит на востоке Восточно-Европейской равнины. Образована область 19 января 1943 года. По своей площади - 37,18 тысяч км2 - она находится на 37 месте среди 49 областей Российской Федерации. Её площадь больше площади некоторых европейских государств, например: Молдавии, Бельгии, Албании, Македонии, Словении, но немного меньше Нидерландов и Швейцарии.'
        return (
            <div className="window">
                <div className="titleDefault">
                    <p>{district}</p>
                </div>
                <div className="imgDefaultWindow">
                    <img src={startPage} alt="фото региона"/>
                </div>
                <div className="textDefaultWindow">
                    <p>{text}</p>
                </div>
            </div>
        )
    }
}
export default DefaultWindow;