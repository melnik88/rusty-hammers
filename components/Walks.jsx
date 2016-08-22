/**
 * Created by egor on 18.08.16.
 */
import React from 'react';

const Walks = () => {
	let walks= [
		{
			title: 'Новогиреево до Таганской',
			date: '22.08.16',
			distance: 17,
			link: 'https://yandex.ru/maps/213/moscow/?mode=routes&rtext=55.751660%2C37.817169~55.739199%2C37.653613&rtt=auto&ll=37.742217%2C55.742505&z=13'

		}
	];

	return (
		<section className="container">
			<h3>Прогулки</h3>
			<table>
				<thead>
				<tr>
					<th>Маршрут</th>
					<th>Дата</th>
					<th>Км</th>
				</tr>
				</thead>
				<tbody>
				{ walks.map((item) => (
						<tr>
							<td><a href={item.link}>{item.title}</a></td>
							<td>{item.date}</td>
							<td>{item.distance}</td>
						</tr>
					)
				)}
				</tbody>
			</table>
			<p className="float-right">
				<small>Таблица 1 Упражнение на одну рабочую неделю</small>
			</p>
		</section>);
};

export default Walks;
