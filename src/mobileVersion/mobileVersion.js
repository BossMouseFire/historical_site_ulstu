import React from "react";
import './mobileVersion.scss'

const MobileVersion = () => {
    return (
        <div className={"mobileVersionBlock"}>
            <div>
                <img src={"images/other/mobileVersion.png"} alt={"мобильная версия"}/>
            </div>
            <div>
                <p>
                    На данный момент сайт адаптирован только под ПК; мобильная версия сайта находится в разработке...
                </p>
            </div>
        </div>
    )
}

export default MobileVersion;
