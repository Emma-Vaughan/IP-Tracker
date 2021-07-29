import { useMap } from "react-leaflet";

function MapReload({ lat, lng }) {
  const map = useMap();
  map.setView([lat, lng], map.getZoom());

  return null;
}

export default MapReload;
