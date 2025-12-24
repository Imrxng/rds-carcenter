import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import ReactDOMServer from 'react-dom/server';

const Map = () => {
  const CUSTOM_ICON = new L.DivIcon({
    html: ReactDOMServer.renderToString(<FaMapMarkerAlt style={{ color: 'var(--accent-color)', fontSize: '35px' }}/>),
    className: "custom-icon",
    iconSize: [35, 35]
  });

  return (
    <MapContainer center={[51.229145781016776, 4.458882915342555]} zoom={14} scrollWheelZoom={false} style={{ height: "auto", width:'60%', backgroundColor: '#f9f9f9',borderRadius: '10px'}}>
      <TileLayer
        attribution="&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[51.229145781016776, 4.458882915342555]} icon={CUSTOM_ICON}>
        <Popup>
          <a href="https://www.google.com/maps/place/RDS+Carcenter/@51.2290618,4.45884,17z/data=!3m1!4b1!4m6!3m5!1s0x47c3f7850e6903df:0x44fb91390ea45b54!8m2!3d51.2290618!4d4.45884!16s%2Fg%2F1tfptfdk?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank">Merksemsesteenweg 11, 2100 Antwerpen</a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;