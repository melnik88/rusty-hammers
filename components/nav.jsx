import React from 'react';
import { Link } from 'react-router';

const Nav = ({links}) => {
    return (
    <section className="container navigation">
        <nav className="nav clearfix">
            <div className="logo2 float-left"><Link to='/'>Rusty Hummers</Link></div>
            <ul className="links float-right">
                { links.map((item) => (<li className='link' key={Math.random()*500}><Link to={item.link}>{item.title}</Link></li>)) }
            </ul>
        </nav>
    </section>)}
export default Nav;