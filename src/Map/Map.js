import { useEffect } from "react";

function Map() {
  useEffect(() => {
    var mymap = window.L.map("mapid").setView([51.505, -0.09], 13);

    window.L.tileLayer(
      "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/1/1/0?access_token=pk.eyJ1IjoiZW1tYW1hcGJveCIsImEiOiJja3JmMGloYnMwdGVnMnZvZXI5NWJ5d24yIn0.jySqpbxZgDEQfiq79ADgaQ",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoiZW1tYW1hcGJveCIsImEiOiJja3JmMGloYnMwdGVnMnZvZXI5NWJ5d24yIn0.jySqpbxZgDEQfiq79ADgaQ",
      }
    ).addTo(mymap);
  }, []);

  return <div id="mapid"></div>;
}

export default Map;
