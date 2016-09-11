import React from 'react';

let ResultTable = (user) => {
  return (

    <section className="container clearfix">
      <h3>{user.name}</h3>
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
        {user.workouts.map((item, index)=> <tr>
          <td>{index + 1}</td>
          <td>{item.days}</td>
          <td dangerouslySetInnerHTML={{ __html: item.workout}} />
          <td dangerouslySetInnerHTML={{ __html: item.total}} />
        </tr>)}
        </tbody>
      </table>
    </section>)
}


export default ResultTable
