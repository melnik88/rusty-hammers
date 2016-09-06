import React from 'react';
import Nav from './Nav.jsx';
import Description from './Description.jsx';
import Workouts from './Workouts.jsx';
import Quotes from './Quotes.jsx';
import Results from './Results.jsx';
import Walks from './Walks.jsx';
import Footer from './Footer.jsx';
import Logo from './Logo.jsx';

let Main = () => {
    const tableId = 'table1';
    const links = [
        {title: 'результаты', link: '#'}
    ]

    return (
        <main className="wrapper logo">
            <Nav links={links} />
            <Logo />
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

