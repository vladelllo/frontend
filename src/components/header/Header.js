import React from 'react';
import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header_wrapper">
				<h1 className="header_title">
					<span className="logo">
						<span className="logo_circle"></span>
						<span className="logo_letter">C</span>
					</span>
					<strong>Cabify</strong>
				</h1>
				<div className="header_text">
					<p>О нас</p>
				</div>
			</div>
		</header>
	);
}

export default Header;
