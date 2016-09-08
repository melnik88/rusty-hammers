import React from 'react';
import Nav from './Nav.jsx';

let Results = (user) => (
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
                <td>500/500</td>
            </tr>
            <tr>
                <td>3</td>
                <td>29.03-04.09.16</td>
                <td>Подтягивания</td>
                <td>50/0/45/45/0/0</td>
            </tr>
            <tr>
                <td>4</td>
                <td>5-13.09.16</td>
                <td>Подтягивания <br/> Берпи </td>
                <td>15/30/30/35<br/>30/30/15/15/</td>
            </tr>
            </tbody>
        </table>
        <p className={'float-right'}><small>Таблица 3 Результаты</small></p>
    </section>);

export default Results;

