import React from 'react'
import Map from '../quiz/map/map'
import QuizWindow from './quizWindow/quizWindow'
import './quiz.scss'
class Quiz extends React.Component {
    state = {
        district: ''
    }

    updateDistrict = (value) => {
        this.setState({
            district: value
        }, () => console.log(this.state.district))
    }
    render (){
        return (
            <div>
                <Map updateDistrict={this.updateDistrict}/>
                <QuizWindow district={this.state.district}/>
            </div>
        )
    }
}

export default Quiz;