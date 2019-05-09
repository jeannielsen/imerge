import React, { Component } from "react";
import "./style.css";

const Navbar = props => (

    <header>
        
        <nav>
        <h2 className = "name">Imerge</h2>
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