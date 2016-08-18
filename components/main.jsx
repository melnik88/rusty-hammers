import React from 'react';
import Description from './Description.jsx';
import Workouts from './Workouts.jsx';
import Footer from './Footer.jsx';

let Main = () => {
    const tableId = 'table1';
    return (
        <main className="wrapper">
            <Description tableId={tableId}/>

            <Workouts tableId={tableId}/>

            <section className="container">
                <h3>Цитата недели</h3>
                <blockquote>
                    <em>Ты не вечен</em>
                    <br/>
                    <small>
                        <a href="https://lifehacker.ru/2016/08/15/the-most-motivational-statement/">https://lifehacker.ru/2016/08/15/the-most-motivational-statement/</a>
                    </small>
                </blockquote>
            </section>

            <section className="container">
                <h3>Таблица результатов</h3>
                <h4>Егор</h4>
                <table>
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Даты</th>
                        <th>Упражнение</th>
                        <th>Количество повторов</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>15-21.08.16</td>
                        <td>Приседания</td>
                        <td>500/1000</td>
                    </tr>
                    </thead>
                </table>
            </section>

            <Footer />
        </main>
    );
};

export default Main;

