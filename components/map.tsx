import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconImg from "@/assets/images/logo.webp";

const Map = () => {
  const CUSTOM_ICON = new L.Icon({
    iconUrl: iconImg.src,      
    iconSize: [60, 60],        
    iconAnchor: [30, 50],     
    popupAnchor: [0, -40],     
    className: "custom-marker"
  });

  return (
    <MapContainer
      center={[51.229145781016776, 4.458882915342555]}
      zoom={16}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      <Marker
        position={[51.229145781016776, 4.458882915342555]}
        icon={CUSTOM_ICON}
      >
        <Popup>
          <a
            href="https://www.google.com/maps/place/RDS+Carcenter/@51.2290618,4.45884,17z"
            target="_blank"
            rel="noopener noreferrer"
          >
            Merksemsesteenweg 11, 2100 Antwerpen
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
