import React from 'react';
import './Logout.css';
import { Url } from 'url';
import {Link,Route,BrowserRouter} from 'react-router-dom';
const Logout = () => {
    return(
      <div className="lout">
        <ul>
        <li><Link to ="/logut">Logout</Link></li>
        </ul>
      </div>
    );
  }
  export default Logout;