import React from 'react';
import Nav from './Nav.jsx';
import ResultTable from './ResultTable.jsx';
let Results = () => {

    const egor = {
        name: 'Егор',
        workouts: [
            { days: '15-21.08.16', workout: 'Приседания', total: '1000/1000' },
            { days: '22-28.08.16', workout: 'Отжимания', total: '500/500' },
            { days: '29.08-04.09.16', workout: 'Подтягивания', total: '50/0/45/45/0/0' },
            { days: '5-11.09.16', workout: 'Подтягивания<br/>Берпи', total: '15/30/30/35<br/>30/30/15/30/0/15/70' },
            { days: '12-18.09.16', workout: 'Пресс', total: '0/0/90/90/45' },
            { days: '19-25.09.16', workout: 'Брусья<br/>Пресс', total: '0/30/30/15/0/<br/>0/90/45/0/0' }
        ]
    };

	const links = [
		{ title: 'результаты', link: '/results' }
	];

    return (
			<main>
				<Nav links={links} />
        <section className="container clearfix">
            <h3>Таблица результатов</h3>
            <ResultTable {...egor} />
        </section>
			</main>
    );
};

export default Results;

