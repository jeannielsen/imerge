import React, { Component } from "react";
import "./style.css";
import Icon from './icon.png';

const Navbar = props => (

    <header>
        
        <nav>
            {/* <img className="icon" src={Icon} alt="not found"></img> */}
        <h1>Imerge</h1>
            <ul className="links mb-1">
                <li> <a href="/">Home</a></li>
                <li> <a href="/Agencies">Agencies</a></li>
                <li> <a href="/Maps">Maps</a></li>
                <li> <a href="/News">News</a></li>
                <li> <a href="/Translator">Translator</a></li>
            </ul>
        </nav>
    </header>
);



export default Navbar;