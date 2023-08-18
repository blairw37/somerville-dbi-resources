import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';

function Map() {
    const position = [42.3876, 71.0995]

    return (
        <MapContainer center={[42.4, -71.1]} zoom={12} scrollWheelZoom={false}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
            <Marker position={position}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;