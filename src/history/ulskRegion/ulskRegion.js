import "./ulskRegion.scss";
export default function UlskRegion() {
  return (
    <div className="containerUlskRegion epochSelection">
      <div className="titleEpoch">
        Ульяновская область, XX век — начало XXI века
      </div>
      <p>
        19 января 1943 года из ряда районов Куйбышевской и Пензенской областей
        образуется Ульяновская область. В 1950—1960-х годах в Ульяновской
        области были созданы новые промышленные предприятия (завод тяжелых и
        уникальных станков (УЗТС) ныне ССЗ), механический завод,
        Димитровградский научно-исследовательский институт атомных реакторов
        (НИИАР) и др.). К железнодорожному "Императорскому мосту" через Волгу,
        построенному при содействии Петра Аркадиевича Столыпина и открытого 5
        октября 1916 года, был пристроен автомобильный мост. Был построен
        аэропорт Ульяновск-Центральный в Ульяновске.
      </p>
      <div className="photoContainer">
        <div className="photo">
          <img src="/images/history/atom_reactor.jpg" />
          <p>
            Научно-исследовательский институт атомных реакторов
          </p>
        </div>
        <div className="photo">
          <img src="/images/history/imperator_bridge.jpg" />
          <p>Императорский мост, 1916 — 1920 гг.</p>
        </div>
      </div>
      <p>
        3 августа 1969 года облисполком принял решение «О проектировании нового
        города — Новоульяновска», одобрив проект № 1 генерального плана нового
        города Новоульяновска. 16 апреля 1970 года Генеральный секретарь ЦК КПСС
        Леонид Брежнев торжественно открывает Ленинский Мемориал. 15 июня 1972
        года, постановлением ПВС РСФСР, город Мелекесс переименован в город
        Димитровград. 18 октября 1975 года начал строится Ульяновский
        авиационно-промышленный комплекс.
      </p>
      <p>
        30 ноября 1979 года вступила в строй первая в мире атомная станция
        теплоснабжения на НИИАРе в Димитровграде. С февраля 1986 года начал
        строиться Президентский мост — совмещённый металлический двухъярусный
        балочный мост через реку Волгу (Куйбышевское водохранилище). Официальная
        церемония открытия первой очереди моста состоялось 24 ноября 2009 года.
      </p>
      <div className="photoContainer">
        <div className="photo">
          <img src="/images/history/president_bridge_building.jpg" />
          <p>Строительство Президентского моста (июнь 2008 г.)</p>
        </div>
        <div className="photo">
          <img src="/images/history/motor_zavod.jpg" />
          <p>Въездные ворота УЗМД, 1945 г.</p>
        </div>
      </div>
      <p>
        26 декабря 2013 года были приняты символы области — герб и флаг
        Ульяновской области. 26 сентября 2017 года Банк России выпустил памятную
        10-ти рублёвую монету, посвящённую Ульяновской области.
      </p>
      <div className="photoContainer last">
        <div className="photo">
          <img src="/images/history/flag_2013.jpg" />
          <p>Флаг Ульяновской области от 26.12.2013</p>
        </div>
        <div className="photo">
          <img src="/images/history/gerb_2013.jpg" />
          <p>Герб Ульяновской области от 26.12.2013</p>
        </div>
      </div>
    </div>
  );
}
