import React from 'react';
import Header from '../components/header/Header';

const Home = () => {
    return (
		<>
			<Header/>
			<div className="section">
				<div className="container">
					<img src={process.env.PUBLIC_URL + '/frontend_developer.jpg'} />
					<div>
						<h2 className="title-2">Жирняков Владислав</h2>
						<p>Frontend-разработчик</p>
					</div>
				</div>

				<div className="container">
					<img src={process.env.PUBLIC_URL + '/backend_developer.jpg'} />
					<div>
						<h2 className="title-2">Чистяков Константин</h2>
						<p>Fullstack-разработчик</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;