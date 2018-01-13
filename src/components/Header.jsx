import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header className="bg-dark-red h3">
			<Link to="/" className="white f1 link pa3 baskerville">
				Marvel App
			</Link>
		</header>
	);
}
