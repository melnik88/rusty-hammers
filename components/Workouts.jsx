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
			description: 'Поставь ноги на ширину плеч. Начни движение вниз, сгибая колени и опуская бедра. Опустись как можно ниже. После того, как колени согнутся чуть ниже, чем на 90 градусов, быстро возвращайся в исходное положение. Держи колени чуть согнутыми, не замыкай суставы. Держи спину и голову прямо на протяжении всего упражнения. Можно смотреть выше линии горизонта. Не отрывай пятки от земли.'
		}, {
			name: 'Отжимания',
			repeats: 500,
			description: ''
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
					<th>Количество повторов</th>
					<th>Описание</th>
				</tr>
                {
                    workouts.map((item) => (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.repeats}</td>
                                <td>{item.description}</td>
                            </tr>
                        )
                    )
                }
				</thead>
				<tbody>
				</tbody>
			</table>
			<p className="float-right">
				<small>Таблица 1 Упражнение на одну рабочую неделю</small>
			</p>
		</section>)
};

export default Workouts;
