import "./bulgaroPeriod.scss";
export default function BulgaroPeriod() {
  return (
    <div className="containerBulgaro epochSelection">
      <div className="titleEpoch">
        Булгаро-татарский период, VIII — XVI века
      </div>
      <p>
        В VIII — IX веках Ульяновское Поволжье вошло в состав ранней Волжской
        Булгарии как союз кочевых тюркоязычных и оседлых угро-финских племён. На
        территории Матвеевского поселения существовало булгарское городище —
        Кокрятское Городище, разоренное монголами в 1236 году. На территории
        городища были найдены: каменный жернов, железные наконечники стрел,
        бронзовые браслеты.
      </p>
      <div className="videoContainer">
        <iframe
          src="https://www.youtube.com/embed/8mQrVwMmHJo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>Аэросъемка Кокрятского городища (Волжско-Камская Булгария)</p>
      </div>
      <p>
        В конце XIV — начале XV века, после опустошительного набега
        среднеазиатского правителя Тамерлана, началось запустение территории
        ульяновского Поволжья. С конца 30-х годов XV века край вошёл в состав
        Казанского ханства. После уничтожения Казанского ханства войсками Ивана
        IV Грозного территория будущего Симбирского края стала постепенно
        заселятся русскими и мордвой, некоторые из которых смешались с местными
        татарами.
      </p>
    </div>
  );
}
