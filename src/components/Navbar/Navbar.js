import React, { Component } from "react";
import "./style.css";

const Navbar = props => (

    <header>
        <nav>
            <div></div>
            <h2>Imerge</h2>
                <div>
                    <ul>
                        <li> <a href="/">Home</a></li>
                        <li> <a href="/Agencies">Agencies</a></li>
                        <li> <a href="/Maps">Maps</a></li>
                        <li> <a href="/Translator">Translator</a></li>
                    </ul>
                </div>

        </nav>
    </header>
);



export default Navbar;