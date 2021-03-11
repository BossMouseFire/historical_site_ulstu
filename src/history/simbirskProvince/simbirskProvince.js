import React from "react";
import "./simbirskProvince.scss";
export default function SimbirskProvince() {
  return (
    <div>
      <div class="titleEpoch">
        Симбирская провинция и Симбирское наместничество, XVIII век
      </div>
      <p>
        В 1708 году вышел Указ Пётр I о разделении Русского царства на 8
        губерний. Синбирск, как провинциальный город, вместе с Симбирским
        уездом, причислен к Казанской губернии. В помощь к воеводе, хотя военное
        управление Симбирской чертой было упразднено, был назначен
        обер-комендант. Синбирская провинция была образована в 1719 году (по
        другим данным в 1737 году в составе Казанской губернии) в составе
        Астраханской губернии из Синбирского уезда.
      </p>
      <p>
        В 1728 году Синбирская провинция была возвращена в Казанскую губернию. С
        5 по 8 июня 1767 году Синбирск посетила императрица Екатерина II. В 1774
        году на территории провинции происходили Пугачёвские бунты, в
        окрестностях Базарного Уреня, погиб воевода провинции Рычков Андрей
        Петрович. По результатам реформы проведенной Екатериной II, 27 декабря
        1780 года, Синбирск переименован в Симбирск, а из Симбирской провинции,
        было образовано Симбирское наместничество.
      </p>
      <div className="photoContainer">
        <div className="photo">
          <img src="/images/history/map_simbirsk_1780.jpg" />
          <p>Карты Симбирского Наместничества 1780 года</p>
        </div>
        <div className="photo">
          <img src="/images/history/map_simbirsk_1792.jpg" />
          <p>
            Карта Симбирского наместничества разделённая на 13 уездов (1792)
          </p>
        </div>
      </div>
    </div>
  );
}
