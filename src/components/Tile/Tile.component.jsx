import React from 'react';
import './Tile.styles.scss';

function Tile({ children, className }) {
	console.log(className);
	return <div className={`tile ${className}`}>{children}</div>;
}

export default Tile;
