require('./node_modules/milligram/dist/milligram.min.css');
require('./style.css');

document.write(`
<main class="wrapper">
    <section class="container">
        <h3>О Rusty Hammers</h3>
        <p>Rusty Hammers - это сайт о подготовке к Гонке Героев 2017 года.</p>

        <h3>Построение тренировки</h3>
        <p>В <a href="#table1">таблице 1</a> приведен список упражнений. Необходимо выбрать одно из этого списка - это
            задание на ближайшие пять дней (т.н. рабочая неделя).
            Количество подходов и повторов в день не ограничено. Это означает, что можно выполнить все повторы в один
            день, а потом - восстанавливаться до следующего задания или же распределить нагрузку по всей неделе.
            Такой подход учит человека самостоятельно и трезво оценивать свои силы.
        </p>
        <p>
           Занятие начинается с разминки, а заканчивается заминкой. После 2-х дней тренировок обязательно следует день перерыва.
        </p>
        <p>Завершается рабочая неделя 10-15 км прогулкой.</p>
        <p>
            <small>1. Скоро в тренировки добавится разгрузочный день. 2. Количество упражнений будет расти. 3. Список маршрутов прогулок будет объявлен заранее</small>
        </p>
    </section>
    <section id="table1" class="container">
        <h3>Задание на неделю</h3>
        <table>
            <thead>
            <tr>
                <th>Задание</th>
                <th>Количество повторов</th>
            </tr>
            </thead>
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
        </table>
        <p class="float-right">
            <small>Таблица 1 Упражнение на одну рабочую неделю</small>
        </p>
    </section>
        <section class="container">
            <h3>Цитата недели</h3>
            <blockquote>
                <em>Ты не вечен</em> <br>
                <small><a href="https://lifehacker.ru/2016/08/15/the-most-motivational-statement/">https://lifehacker.ru/2016/08/15/the-most-motivational-statement/</a></small>
            </blockquote>

            </p>
    </section>

    <section class="container">
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

    <footer class="container">
        <p>Я выживу. Егор</p>
    </footer>
</main>
`);