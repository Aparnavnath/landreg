import React from 'react';
import './Header.css';
import { Url } from 'url';
import {Link,Route,BrowserRouter} from 'react-router-dom';
import Buyerprofile from './Buyerprofile';
import Selling from './Selling';
const Header = () => {
    return(
      <div className="head">
      <div className="title">Land Registration</div>
        <ul>
        <li><Link to ="/log">Login</Link></li>
        <li><Link to ="/proreg">Personalprofile</Link></li>
          <li><Link to ="/about">About</Link></li>
        </ul>
      </div>
    );
  }
  export default Header;