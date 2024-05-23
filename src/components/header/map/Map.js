import React from "react";
import { YMaps, Map, TrafficControl, RoutePanel, FullscreenControl, ZoomControl} from '@pbe/react-yandex-maps';


function MyMap() {
    
    return (
        <YMaps query={{apikey: "791b7327-879d-4ad1-8762-214d7c4c62f1"}}>
            <Map defaultState={{
                center: [55.771574, 37.603856],
                zoom: 12,
                controls: [],
                }}
                options={{restrictMapArea: [
                    [55.453, 37.175],
                    [56.001, 38.019]
                ]}}
                width={600}
                height={600}
            >

            <FullscreenControl />
            <TrafficControl options={{ float: "right" }} />
            <RoutePanel options={{ float: "left" }}/>
            <ZoomControl options={{ float: "right" }} />
            </Map>
        </YMaps>
    );
  }
  
  export default MyMap;