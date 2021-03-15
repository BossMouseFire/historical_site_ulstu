import React from "react";
import "./modal.scss";

const Modal = ({ isOpen, stateModal, changePage }) => {
  return (
    <div
      className={isOpen ? "modalContainer activeModal" : "modalContainer"}
      onClick={() => stateModal(false)}
    >
      <div
        className={
          isOpen
            ? "modalContent activeContent"
            : "modalContent unactivatedContent"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className="titleModal">
          ulhistory.live – об истории Ульяновской области и не только!
        </div>
        <div className="bodyModal">
          Добро пожаловать на наш сайт! На его просторах Вы сможете узнать
          больше как про историю нашей области, так и про историю отдельно
          взятых её районов, изучая интерактивную карту; про выдающихся
          симбирян-ульяновцев, прославивших наш край, достопримечательности и
          интересные места нашей области. Перейдём к разделам сайта:
        </div>
        <div className="changeSection">
          <div className="section">
            <img src="/images/modal/history.jpg" alt="history" />
            <button onClick={() => changePage("history")}>История</button>
          </div>
          <div className="section">
            <img src="/images/modal/people.jpg" alt="people" />
            <button onClick={() => changePage("greatPeople")}>Люди</button>
          </div>
          <div className="section">
            <img src="/images/modal/attraction.jpg" alt="attractions" />
            <button onClick={() => changePage("attractions")}>Места</button>
          </div>
          <div className="section">
            <img src="/images/modal/map.jpg" alt="districts" />
            <button onClick={() => changePage("map")}>Субъекты</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
