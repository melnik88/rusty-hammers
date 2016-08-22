import React from 'react';
import Description from './Description.jsx';
import Workouts from './Workouts.jsx';
import Quotes from './Quotes.jsx';
import Results from './Results.jsx';
import Walks from './Walks.jsx';
import Footer from './Footer.jsx';

let Main = () => {
    const tableId = 'table1';
    return (
        <main className="wrapper">
            <Description tableId={tableId}/>
            <Workouts tableId={tableId}/>
            <Quotes />
            <Walks />
            <Results user={{ name: 'Egor', results: [] }} />
            <Footer />
        </main>
    );
};

export default Main;

