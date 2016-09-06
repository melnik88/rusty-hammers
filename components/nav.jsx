import React from 'react';

const Nav = ({links}) => {
    return (
    <section className="container navigation">
        <nav className="nav clearfix">
            <div className="logo2 float-left">Rusty Hummers</div>
            <ul className="links float-right">
                { links.map((item) => (<li className='link' key={Math.random()*500}><a href={item.link}>{item.title}</a></li>)) }
            </ul>
        </nav>
    </section>)}
export default Nav;