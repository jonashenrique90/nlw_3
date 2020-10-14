import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import mapMarkerImg from '../assets/map-marker.svg';
import '../styles/components/Sidebar.css';

const Sidebar: React.FC = () => {
	const { goBack } = useHistory();
	return (
		<aside className="app-sidebar">
			<img src={mapMarkerImg} alt="Happy"/>
			<footer>
				<button type="button" onClick={goBack}>
					<FiArrowLeft size={24} color="#fff"></FiArrowLeft>
				</button>
			</footer>
		</aside>
	)
}

export default Sidebar;
