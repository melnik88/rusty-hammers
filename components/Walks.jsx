/**
 * Created by egor on 18.08.16.
 */
import React from 'react';

const Walks = () => {
	const walks = [
		{
			title: 'от Новогиреево до Таганской',
			date: '22.08.16',
			distance: 17,
			link: 'https://yandex.ru/maps/213/moscow/?mode=routes&rtext=55.751660%2C37.817169~55.739199%2C37.653613&rtt=auto&ll=37.742217%2C55.742505&z=13'
		}, {
			title: 'Бульварная улитка',
			date: '28.08.16',
			distance: 18,
			link: 'https://yandex.ru/maps/213/moscow/?mode=search&text=%D0%B1%D0%BE%D0%BB%D1%8C%D0%B2%D0%B0%D1%80%D0%BD%D0%BE%D0%B5%20%D0%BA%D0%BE%D0%BB%D1%8C%D1%86%D0%BE&sll=37.620393%2C55.753960&sspn=1.580658%2C0.740396&ouri=ymapsbm1%3A%2F%2Fgeo%3Fll%3D37.624%252C55.767%26spn%3D0.051%252C0.024%26text%3D%25D0%25A0%25D0%25BE%25D1%2581%25D1%2581%25D0%25B8%25D1%258F%252C%2520%25D0%259C%25D0%25BE%25D1%2581%25D0%25BA%25D0%25B2%25D0%25B0%252C%2520%25D0%2591%25D1%2583%25D0%25BB%25D1%258C%25D0%25B2%25D0%25B0%25D1%2580%25D0%25BD%25D0%25BE%25D0%25B5%2520%25D0%25BA%25D0%25BE%25D0%25BB%25D1%258C%25D1%2586%25D0%25BE&ll=37.607819%2C55.751204&z=14&rtext=55.744587%2C37.603009~55.766430%2C37.609339~55.766927%2C37.621767~55.759937%2C37.644577~55.749057%2C37.644830~55.737260%2C37.606001~55.744108%2C37.568080~55.760034%2C37.580182~55.768841%2C37.594774&rtt=pd&ol=geo'
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
