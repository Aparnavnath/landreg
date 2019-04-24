import React from 'react';
import {NavLink} from 'react-router-dom';
import './Sidemenu.css';
import Law from './Law';
import Common from './Commn';

import { Url } from 'url';
import {Link,Route,BrowserRouter} from 'react-router-dom';
import Menu from './Menu';
export default function Sidemenu(){
    return (
        <BrowserRouter>
        <div className="sidemenu">
        <ul>
            <li><Link to ="/abo" >About</Link></li>
           <li><Link to ="/la" >Laws and Regulations</Link></li>
           <li><Link to ="/com" >Common Questions</Link></li>
           <li><Link to ="/dow" >Downloadings</Link></li>
           <li><Link to ="/lia" >Liability Certificate</Link></li>
           <li><Link to ="/cot" >Contact</Link></li>

                  <Route  path="/la" component={Law}/>
                  <Route  path="/abo" component={Menu}/>
                   
                  </ul>
        </div>
        </BrowserRouter>
    );
}