import React from 'react';

let reasultTable = (user)=> (
        <section className="container clearfix">
            <h3>Таблица результатов</h3>
            <h4>{user.name}</h4>
            <table>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Даты</th>
                    <th>Упражнение</th>
                    <th>Количество повторов</th>
                </tr>
                </thead>
                <tbody>
                {user.results.map((item, index)=> <tr><td>{index}</td><td>{item.days}</td><td>{item.workout}</td><td>total</td></tr>)}
                </tbody>
            </table>
            <p className={'float-right'}><small>Таблица 1 {user.name}</small></p>
        </section>);
}

export default resultTable