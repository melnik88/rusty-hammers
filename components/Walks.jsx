/**
 * Created by egor on 18.08.16.
 */
import React from 'react';

const Walks = () => {
	let walks= [
		{
			title: 'от Новогиреево до Таганской',
			date: '22.08.16',
			distance: 17,
			link: 'https://yandex.ru/maps/213/moscow/?mode=routes&rtext=55.751660%2C37.817169~55.739199%2C37.653613&rtt=auto&ll=37.742217%2C55.742505&z=13'

		}
	];

	return (
		<section className="container clearfix">
			<h3>Прогулки</h3>
			<table>
				<thead>
				<tr>
					<th>Маршрут</th>
					<th>Км</th>
					<th>Дата</th>
				</tr>
				</thead>
				<tbody>
				{ walks.map((item) => (
						<tr>
							<td><a href={item.link}>{item.title}</a></td>
							<td>{item.distance}</td>
							<td>{item.date}</td>
						</tr>
					)
				)}
				</tbody>
			</table>
			<p className="float-right">
				<small>Таблица 2 Прогулки</small>
			</p>
		</section>);
};

export default Walks;
