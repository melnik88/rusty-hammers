import React from 'react';
import Nav from './Nav.jsx';

let Contacts = () => {
	const links = [
		{ title: 'Результаты', link: '/results' },
		{ title: 'Прогулки', link: '/walks' },
		{ title: 'Контакты', link: '/contacts' }
	];

	return (
		<main>
			<Nav links={links} />
			<section className="container clearfix">
				<h3>Таблица Контакты</h3>
				<p>Телефон: 8-916-493-99-56</p>
				<p>Почта: job.egor2009@yandex.ru</p>
			</section>
		</main>
	);
};

export default Contacts;