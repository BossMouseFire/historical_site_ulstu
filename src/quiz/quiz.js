import React from 'react'
import Map from '../quiz/map/map'
import QuizWindow from './quizWindow/quizWindow'
import DefaultWindow from './quizWindow/defaultWindow'
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
                {this.state.district ? <QuizWindow district={this.state.district}/> : <DefaultWindow/> }
            </div>
        )
    }
}

export default Quiz;