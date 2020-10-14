import React, { useEffect, useState, useContext} from 'react';
import mapMarkerImg from '../../assets/map-marker.svg';
import { ThemeContext } from 'styled-components';
import { FiArrowRight, FiPlusCircle } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { PageMap, CreateOrphanage, MyPopUp } from './styles';
import mapIcon from '../../utils/mapIcon';
import { Link } from 'react-router-dom';
import api from '../../services/api';

interface Orphanage {
	id: number;
	latitude: number;
	longitude: number;
	name: string;
}

const OrphanagesMap = () => {
	const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
	console.log(orphanages);
	
	
	const { title } = useContext(ThemeContext);

	useEffect(() => {
		 api.get('orphanages').then(response => {			 
			 setOrphanages(response.data);
		 });
	}, []);
    return (
        <div>
            <PageMap>
				<aside>
					<header>
						<img src={mapMarkerImg} alt="mapMarker"/>
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
					{orphanages.map(orphanage => {
						return (
							<Marker key={orphanage.id} icon={mapIcon} position={[orphanage.latitude, orphanage.longitude]}>
							<MyPopUp closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
								{orphanage.name}
								<Link to={`orphanages/${orphanage.id}`}>
									<FiArrowRight size={20} color="#fff"></FiArrowRight>
								</Link>
							</MyPopUp>
						</Marker>
						)
					})}
				</Map>
				<CreateOrphanage to="/orphanages/create">
					<FiPlusCircle size={32} color="#fff"></FiPlusCircle>
				</CreateOrphanage>
			</PageMap>
        </div>
    )
}

export default OrphanagesMap;
