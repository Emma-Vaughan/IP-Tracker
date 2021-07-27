import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MapReload from "./MapReload";

function Map({ data }) {
  let lat;
  let lng;

  if (data === "") {
    lat = 37.773972;
    lng = -122.431297;
  } else {
    lat = data.location.lat;
    lng = data.location.lng;
  }

  return (
    <MapContainer center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <MapReload lat={lat} lng={lng} />
    </MapContainer>
  );
}

export default Map;
