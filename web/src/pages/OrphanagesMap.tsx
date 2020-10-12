import React from 'react'
import mapMArkerImg from '../assets/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlusCircle } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import '../styles/pages/orphanages.css';
import 'leaflet/dist/leaflet.css';

export default function OrphanagesMap() {
    return (
        <div>
            <div id="page-map">
				<aside>
					<header>
						<img src={mapMArkerImg} alt="mapMarker"/>
						<h2>Escolha um orfanato no mapa</h2>
						<p>Muitas crianças estão esperando a sua visita :)</p>
					</header>
					<footer>
						<strong>Juazeiro</strong>
						<span>Bahia</span>
					</footer>
				</aside>
				<Map center={[-9.8894664, -39.9655284]} zoom={15} minZoom={3} style={{ width: '100%', height: '100%'}}>
					<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
					{/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer> */}
					{/* <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/ligth-v10/tiles/256/{z}/{x}/{y}@2x?acess_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}></TileLayer> */}
				</Map>
				<Link to="" className="create-orphanage">
					<FiPlusCircle size={32} color="#fff"></FiPlusCircle>
				</Link>
			</div>
        </div>
    )
}
