import React from 'react';
import Nav from './Nav.jsx';
import Description from './Description.jsx';
import Workouts from './Workouts.jsx';
import Quotes from './Quotes.jsx';
import Walks from './Walks.jsx';
import Footer from './Footer.jsx';
import Logo from './Logo.jsx';
import { links } from './constants.jsx';

let Main = () => {
	const tableId = 'table1';

	return (
		<main className="wrapper logo">
			<Nav links={links}/>
			<Logo />
			<Description tableId={tableId}/>
			<Workouts tableId={tableId}/>
			<Quotes />
			<Footer />
		</main>
	);
};

export default Main;

