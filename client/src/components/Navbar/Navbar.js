import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";


const Navbar = props => (

    <header>
        <h2>Imerge</h2>
        <nav>
            <ul>
                <li> <Link to ="/">Home</Link></li>
                <li> <Link to ="/Agencies">Agencies</Link></li>
                <li> <Link to ="/Maps">Maps</Link></li>
                <li> <Link to ="/News">News</Link></li>
                <li> <Link to ="/Translator">Translator</Link></li>
            </ul>
        </nav>
    </header>
);


export default Navbar;