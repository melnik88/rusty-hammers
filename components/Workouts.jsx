/**
 * Created by egor on 18.08.16.
 */
import React from 'react';

const Workouts = ({
    tableId
    }) => {
    return (
        <section id={tableId} className="container">
            <h3>Задание на неделю</h3>
            <table>
                <thead>
                <tr>
                    <th>Задание</th>
                    <th>Количество повторов</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Приседания</td>
                    <td>1000</td>
                </tr>
                <tr>
                    <td>Отжимания</td>
                    <td>500</td>
                </tr>
                <tr>
                    <td>Подтягивания</td>
                    <td>250</td>
                </tr>
                <tr>
                    <td>Берпи</td>
                    <td>250</td>
                </tr>
                <tr>
                    <td>Скакалка</td>
                    <td>20 мин</td>
                </tr>
                <tr>
                    <td>Пресс</td>
                    <td>1000</td>
                </tr>
                <tr>
                    <td>Прыжки на бокс</td>
                    <td>250</td>
                </tr>
                <tr>
                    <td>Отжимания на брусьях</td>
                    <td>250</td>
                </tr>
                <tr>
                    <td>Планка</td>
                    <td>20 мин</td>
                </tr>
                <tr>
                    <td>Подъем по эскалатор пешком</td>
                    <td>20 лестниц</td>
                </tr>
                </tbody>
            </table>
            <p className="float-right">
                <small>Таблица 1 Упражнение на одну рабочую неделю</small>
            </p>
        </section>)
};

export default Workouts;
