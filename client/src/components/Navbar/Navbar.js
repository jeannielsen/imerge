import React from "react";
import "./style.css";
import { withTranslation } from 'react-i18next';


const Navbar = props => (
    
    <header>
        <h2>Imerge</h2>
        <nav>
            <ul>
                <li> <a href="/">Home</a></li>
                <li> <a href="/Agencies">Agencies</a></li>
                <li> <a href="/Maps">Maps</a></li>
                <li> <a href="/News">News</a></li>
                <li> <a href="/Translator">Translator</a></li>
            </ul>
        </nav>
    </header>
);



// export default Navbar;
export default withTranslation()(Navbar);