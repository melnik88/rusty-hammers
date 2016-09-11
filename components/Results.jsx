import React from 'react';
import Nav from './Nav.jsx';
import ResultTable from './ResultTable.jsx';
let Results = () => {

    const egor = {
        name: 'Егор',
        workouts: [
            { days: '15-21.08.16', workout: 'Приседания', total: '1000/1000' },
            { days: '22-28.08.16', workout: 'Отжимания', total: '500/500' },
            { days: '29.03-04.09.16', workout: 'Подтягивания', total: '50/0/45/45/0/0' },
            { days: '5-13.09.16', workout: 'Подтягивания<br/>Берпи', total: '15/30/30/35<br/>30/30/15/30/0/15/70' }
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

