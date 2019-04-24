import React, {Component}from 'react';
import './Menu.css';
import { Url } from 'url';
import {Link,Route,BrowserRouter} from 'react-router-dom';
import Registration from './Registration';
import Governprofile from './Governprofile';
import Buyerprofile from './Buyerprofile';
import Selling from './Selling';
import Login from './Login';
import Law from './Law';
import Liability from './Liability';
import Commn from './Commn';
import Download from './Download';
import Tax from './Tax';
import Name from'./Name';
class Menu extends Component{
  render=() =>{ 
  return(
  <div className="containerr">
      <ul>
        <li><Link to ="/reg">Registration</Link></li>
        <li><Link to ="/sell" >Buying</Link></li>
        <li><Link to ="/buy" >for sale</Link></li>
        <li><Link to ="gis">GIS</Link> </li>
        <li><Link to ="bck">Back</Link> </li>
      </ul>
    </div>
  );
}}
export default Menu;