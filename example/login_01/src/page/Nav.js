import React from 'react';
import '../Login.css';
import {Routes, Route, Link} from "react-router-dom"

function Nav(props){
    const menu = []
    for(let i=0 ; i<props.menu.length; i++){
        let box = props.menu[i];
        menu.push(<Link to={box.path} className="link">{box.title}</Link>)
    }
    return(
        <nav className='navbar'>
            {menu}
        </nav>
    );
}

export default Nav;