import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import ResourceMarker from './ResourceMarker.js';

function Map() {
    const position = [42.4, -71.1]

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ResourceMarker lat="42.4" long="-71.1"></ResourceMarker>
        </MapContainer>
    );
}

export default Map;