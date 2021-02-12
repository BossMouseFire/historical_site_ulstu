import React from 'react'
import './quizWindow.css'

class QuizWindow extends React.Component{
    render(){
        const district = this.props.district ? this.props.district : 'Выберите регион';
        const title = this.props.district ? 'title' : 'defaultTitle';
        return (
            <div className="window">
                <h1 className={title}>{district}</h1>
            </div>
        )
    }
}
export default QuizWindow;