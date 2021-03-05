import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import "./modal.scss";
import { animated } from "react-spring/renderprops";
class Modal extends Component {
  render() {
    return (
      <div>
        <Spring
          native
          from={{
            opacity: 0,
            transform: "scale(0)",
          }}
          to={{
            opacity: this.props.isOpen ? 1 : 0,
            transform: this.props.isOpen ? "scale(2)" : "scale(0)",
          }}
          config={{ duration: 600 }}
        >
          {(props) => {
            return (
              <div id="wrapper">
                <animated.div className="modalWindow" style={props}>
                  <div className="titleModal">
                    ulhistory.live – об истории Ульяновской области и не только!
                  </div>
                  <div className="bodyModal">
                    Добро пожаловать на наш сайт! На его просторах Вы сможете
                    узнать больше как про историю нашей области, так и про
                    историю отдельно взятых её районов, изучая интерактивную
                    карту; про выдающихся симбирян-ульяновцев, прославивших наш
                    край, достопримечательности и интересные места нашей
                    области. Перейдём к разделам сайта:
                  </div>
                  <div className="cross">
                    <button onClick={() => this.props.stateModel()}>
                      <img
                        src="/images/modal/crossRemove.svg"
                        alt="стрелка удалить"
                      />
                    </button>
                  </div>
                  <div className="changeSection">
                    <div className="section">
                      <img src="/images/modal/history.jpg" alt="history" />
                      <button
                        onClick={() => this.props.changeStateProps("history")}
                      >
                        История
                      </button>
                    </div>
                    <div className="section">
                      <img src="/images/modal/people.jpg" alt="people" />
                      <button
                        onClick={() =>
                          this.props.changeStateProps("greatPeople")
                        }
                      >
                        Люди
                      </button>
                    </div>
                    <div className="section">
                      <img
                        src="/images/modal/attraction.jpg"
                        alt="attractions"
                      />
                      <button
                        onClick={() =>
                          this.props.changeStateProps("attractions")
                        }
                      >
                        Места
                      </button>
                    </div>
                    <div className="section">
                      <img src="/images/modal/map.jpg" alt="districts" />
                      <button
                        onClick={() => this.props.changeStateProps("map")}
                      >
                        Субъекты
                      </button>
                    </div>
                  </div>
                </animated.div>
              </div>
            );
          }}
        </Spring>
      </div>
    );
  }
}
export default Modal;
