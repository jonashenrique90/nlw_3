import L from 'leaflet';

import mapMarkerImg from '../assets/map-marker.svg';

const mapIcon = L.icon({
	iconUrl: mapMarkerImg,  
	iconSize: [34, 44],
	iconAnchor: [17, 44],
	popupAnchor: [0, -60]
})

export default mapIcon;