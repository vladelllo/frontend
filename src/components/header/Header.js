import React from 'react';
import DateTimeRangePickerValue from './week_picker/WeekPicker';
import MyMap from './map/Map';
import "./style.css";


const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header_wrapper">
                    <h2 className="header_title">
                        <strong>Инновации под рукой</strong>
                    </h2>
                    <h3 className="header_text">
                        Когда дело доходит до экономии времени и денег - мы вам поможем!
                    </h3>
                    <div className='date-range-picker-container'>
                        <DateTimeRangePickerValue />
                        <button id="show_graph_button">КЛАЦ</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <MyMap />
                <div className="graphic_container"></div>
            </div>

        </header>
    );
}

export default Header;
