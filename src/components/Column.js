import React from 'react';


const Column = ({ title, content }) => {
  return (
    <div className="columns-container">
        <div className="column">
            <div class="ellipse_orange"></div>
            <div class="description">Инновации <br> под рукой </br></div>
            <div class="subdescription">Хотите сэкономить - <br> мы вам поможем!</br></div>
            <div class="text_prices">Изменение цен на такси от исходной <br> точки в зависимости от времени</br></div>

            <div class="calendar">
                <button id="btnPrev" type="button">Предыдущий</button>
                <button id="btnNext" type="button">Следующий</button>

                <div id="divCal"></div>
                <div id="selected-date"></div>

                <div id="current-time" class="current-time"></div>

                <button id="show-chart-button">КЛАЦ!</button>
            </div>
        </div>

        <div className="column">
            <div class="map">
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;coordorder=longlat&amp;apikey=790aa23d-7c53-410b-bfe0-c2ff5b0cd7fc" type="text/javascript"></script>
                {/* <script src="script.js" type="text/javascript"></script> */}
                <div id="map"></div>
            </div>
            <div class="ellipse_azure"></div>
            <canvas id="myChart"></canvas>
        </div>
    </div>
  );
};

export default Column;