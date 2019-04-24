import React from 'react';
import {NavLink} from 'react-router-dom';
import './Click.css';
import { Url } from 'url';
import {Link,Route,BrowserRouter} from 'react-router-dom';

import { createPublicKey } from 'crypto';
import Registration from './Registration';
import Law from './Law';
import Liability from './Liability';
import Commn from './Commn';
import Download from './Download';
import Sold from './Sold';
const Click = ()=>{
    return(
        <nav role='navigation'>
            <div id="menuToggle">
                <input type="checkbox"/>
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <Link to ="/law"><li>Laws and Regulation</li></Link>
                    <Link to ="/com"><li>CommonQuestions</li></Link>
                    <Link to ="/lia"><li>Liability Certificate</li></Link>
                    <Link to ="/dow"><li>Downloadings</li></Link>
                    <Link to ="/sld"><li>property for sale</li></Link>
                    <Link to ="/brow"><li>buyers</li></Link>
                    <Link to ="/bck"><li>Logout</li></Link>

                </ul>
            </div>
        </nav>
    );
}

export default Click;







