import React from 'react';

let Results = (user) => (

    <section className="container">
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
            <tr>
                <td>1</td>
                <td>15-21.08.16</td>
                <td>Приседания</td>
                <td>1000/1000</td>
            </tr>
            <tr>
                <td>2</td>
                <td>22-28.08.16</td>
                <td>Отжимания</td>
                <td>50/500</td>
            </tr>
            </tbody>
        </table>
    </section>);

export default Results;
