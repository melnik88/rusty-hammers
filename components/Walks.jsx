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
			link: 'https://yandex.ru/maps/213/moscow/?mode=routes&rtext=55.751660%2C37.817169~55.739199%2C37.653613&rtt=auto&ll=37.742217%2C55.742505&z=13',
			description: ''
		}, {
			title: 'Бульварная улитка',
			date: '28.08.16',
			distance: 18,
			link: 'https://yandex.ru/maps/213/moscow/?mode=search&ll=37.607176%2C55.752304&z=14&rtext=55.744587%2C37.603009~55.766430%2C37.609339~55.766927%2C37.621767~55.759937%2C37.644577~55.749057%2C37.644830~55.737260%2C37.606001~55.747981%2C37.583015~55.768841%2C37.594774&rtt=pd&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fll%3D37.624031%252C55.766536%26spn%3D0.001%252C0.001%26text%3D%25D0%25A0%25D0%25BE%25D1%2581%25D1%2581%25D0%25B8%25D1%258F%252C%2B%25D0%259C%25D0%25BE%25D1%2581%25D0%25BA%25D0%25B2%25D0%25B0%252C%2B%25D0%2591%25D1%2583%25D0%25BB%25D1%258C%25D0%25B2%25D0%25B0%25D1%2580%25D0%25BD%25D0%25BE%25D0%25B5%2B%25D0%25BA%25D0%25BE%25D0%25BB%25D1%258C%25D1%2586%25D0%25BE',
			description: 'Начало в 14:00. Сбор возле Храма Христа Спасителя. Станции метро - Кропоткинская'
		},
		{
			title: '',
			date: '4.09.16',
			distance: '',
			link: '',
			description: 'Прогулка отменена'
		},
		{
			title: 'от Марьино до Нагатинской',
			date: '11.09.16',
			distance: 21,
			link: 'https://yandex.ru/maps/213/moscow/?ncrnd=1195&ll=37.722333%2C55.660669&z=13&l=sat%2Cskl&rtext=55.650510%2C37.744334~55.639216%2C37.738040~55.643828%2C37.690835~55.685620%2C37.709075~55.683386%2C37.622863&rtt=pd&mode=routes',
			description: 'Сбор в 13:00 возле станции метро Марьино. Маршрут будет проходить вдоль набережной Москвы-реки'
		},
		{
			title: 'от Коломенской до Парка победы',
			date: '25.09.16',
			distance: 17,
			link: 'https://yandex.ru/maps/213/moscow/?ll=37.585414%2C55.701629&z=13&mode=routes&text=%D0%BA%D0%BE%D0%BB%D0%BE%D0%BC%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BC%D0%B5%D1%82%D1%80%D0%BE&sll=37.620393%2C55.740017&sspn=2.009125%2C0.578737&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fll%3D37.664%252C55.678%26spn%3D0.001%252C0.001%26text%3D%25D0%25A0%25D0%25BE%25D1%2581%25D1%2581%25D0%25B8%25D1%258F%252C%2520%25D0%259C%25D0%25BE%25D1%2581%25D0%25BA%25D0%25B2%25D0%25B0%252C%2520%25D0%2597%25D0%25B0%25D0%25BC%25D0%25BE%25D1%2581%25D0%25BA%25D0%25B2%25D0%25BE%25D1%2580%25D0%25B5%25D1%2586%25D0%25BA%25D0%25B0%25D1%258F%2520%25D0%25BB%25D0%25B8%25D0%25BD%25D0%25B8%25D1%258F%252C%2520%25D0%25BC%25D0%25B5%25D1%2582%25D1%2580%25D0%25BE%2520%25D0%259A%25D0%25BE%25D0%25BB%25D0%25BE%25D0%25BC%25D0%25B5%25D0%25BD%25D1%2581%25D0%25BA%25D0%25B0%25D1%258F&rtext=55.678407%2C37.663827~55.678927%2C37.563437~55.736164%2C37.516925&rtt=pd',
			description: 'Сбор в 14:20 возле станции метро Коломенская'
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
					<th>Описание</th>
				</tr>
				</thead>
				<tbody>
				{ walks.map((item) => (
						<tr>
							<td><a href={item.link}>{item.title}</a></td>
							<td>{item.distance}</td>
							<td>{item.date}</td>
							<td width="45%">{item.description}</td>
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
