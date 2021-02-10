import React from 'react'
import Map from '../quiz/map/map'
import QuizWindow from './quizWindow/quizWindow'
import './quiz.css'
class Quiz extends React.Component {
    render (){
        return (
            <div className="form">
                <Map/>
                <QuizWindow/>
            </div>
        )
    }
}

export default Quiz;