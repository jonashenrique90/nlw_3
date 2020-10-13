import React, { useContext} from 'react';
import mapMArkerImg from '../../assets/map-marker.svg';
import { ThemeContext } from 'styled-components';
import { FiPlusCircle } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import { PageMap, CreateOrphanage } from './styles';
import 'leaflet/dist/leaflet.css';

export default function OrphanagesMap() {
	const { title } = useContext(ThemeContext)
    return (
        <div>
            <PageMap>
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
					{/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer> */}
					{/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer> */}
					<TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/${title}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}></TileLayer>
				</Map>
				<CreateOrphanage to="/">
					<FiPlusCircle size={32} color="#fff"></FiPlusCircle>
				</CreateOrphanage>
			</PageMap>
        </div>
    )
}
