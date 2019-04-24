import React from 'react';
import './Home.css';
import { Url } from 'url';
import {Link,Route,BrowserRouter} from 'react-router-dom';
import Registration from './Registration';
import Login from './Login';
import Law from './Law';
import Buyerprofile from './Buyerprofile';

const Home = () => {
  return(
    <div className="hmo">
      <ul>
        <li><Link to ="/log">Login</Link></li>
        <li><Link to ="/proreg">Personalprofile</Link></li>
        <li><Link to ="gis">GIS</Link> </li>

      </ul>
    </div>
  );
}
export default Home;