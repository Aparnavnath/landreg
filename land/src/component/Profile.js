import React from 'react';
import './profile.css';
import Selling from './Selling';
import Tax from './Tax';
import Loan from './Loan';
import { Url } from 'url';
import {Link,Route,BrowserRouter} from 'react-router-dom';


const Profile=()=>{

    return(
    <div className='card'>
           <center> <h1>PROFILE</h1></center>
                <Link to ="/tax" > <input type="submit" value="Viewtax" /></Link> <br></br>
                <Link to ="/sell" > <input type="submit" value="Selling" /></Link> 
                <Link to ="/lon" > <input type="submit" value="Apply for loan" /></Link> 

    </div>
);
}

export default Profile;
