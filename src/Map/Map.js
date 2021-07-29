import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MapReload from "./MapReload";

function Map({ data }) {
  const [lat, lng] =
    data === ""
      ? [37.773972, -122.431297]
      : [data.location.lat, data.location.lng];

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
