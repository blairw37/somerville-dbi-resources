import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import './ResourceMarker.css';

function ResourceMarker(props) {
    const position = [props.lat, props.long]

    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    return (
        <Marker position={position}>
            <Popup>
                This is a popup. <br /> Yay.
            </Popup>
        </Marker>
    );
}

export default ResourceMarker;