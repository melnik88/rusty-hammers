/**
 * Created by egor on 18.08.16.
 */
import React from 'react';

const Workouts = ({
	tableId
	}) => {
	let workouts = [
		{
			name: 'Приседания',
			repeats: 1000,
			description: [
				<a href="http://www.mhealth.ru/form/fitness/uprazhnenija_dna_klassicheskije_prisedanija__smotri_i_uchis/">Приседания
					- смотри и учись!</a>,
				<br />,
				<strong>Прим RH:</strong>,
				' держи колени чуть согнутыми, не замыкай суставы. Держи спину и голову прямо на протяжении всего' +
				' упражнения. Можно смотреть выше линии горизонта. Не отрывай пятки от земли.'
			]
		}, {
			name: 'Отжимания',
			repeats: '500/250',
			description: [
				<a href="http://www.mhealth.ru/form/fitnessnews/1046019/">Как развить мышцы груди?</a>,
				<br/>,
				<a href="http://www.iron-health.ru/tehnika/otzhimaniya-s-kolen-dlya-zhenshhin-texnika-vypolneniya.html">Отжимания
					с колен для девушек</a>,
				<br/>,
				<strong>Прим RH:</strong>,
				'  девушкам следует начинать с отжиманий с колен и постепенно переходить к полноценным отжиманиям'
			]
		}, {
			name: 'Подтягивания',
			repeats: 250,
			description: ''
		}, {
			name: 'Берпи',
			repeats: 250,
			description: ''
		}, {
			name: 'Скакалка',
			repeats: '20 мин',
			description: ''
		}, {
			name: 'Пресс',
			repeats: 1000,
			description: ''
		}, {
			name: 'Прыжки на бокс',
			repeats: 250,
			description: ''
		}, {
			name: 'Отжимания на брусьях',
			repeats: 250,
			description: ''
		}, {
			name: 'Планка',
			repeats: '20 мин',
			description: ''
		}, {
			name: 'Подъем по эскалатор пешком',
			repeats: '20 лестниц',
			description: ''
		}
	];

	return (
		<section id={tableId} className="container clearfix">
			<h3>Задание на неделю</h3>
			<table>
				<thead>
					<tr>
						<th>Задание</th>
						<th>Количество повторов(муж/жен)</th>
						<th>Описание</th>
					</tr>
				</thead>
				<tbody>
					{ workouts.map((item) => (
						<tr>
							<td>{item.name}</td>
							<td>{item.repeats}</td>
							<td>{item.description}</td>
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

export default Workouts;
