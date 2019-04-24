import React from 'react';
import './Download.css';
import Footer from './Footer';
import { Url } from 'url';
import {Link,Route,BrowserRouter} from 'react-router-dom';

const Download = ()=>{
  return(
    <div className="dow">
      <div className="dow1">
        <h1><u>Encumbrance Certificate</u></h1>
        <a href="#" className="forgo">Apply for the Encumbrance Certificate</a>
        <input type="submit" value="Downloading" className="Log" id />
       
        <div className="dow2">
        <h1><u>PossessionCertificate</u></h1>
        <a href="#" className="forgo">Apply for PossessionCertificate</a>
        <input type="submit" value="Downloading" className="Log" id />
        <div className="dow3">
        <h1><u>Stamp Paper</u></h1>
        <a href="#" className="forgo">Apply for Stamp paper</a>
        <input type="submit" value="Downloading" className="Log" id />
        <div className="dow4">
        <h1><u>LOAN</u></h1>
        <a href="#" className="forgo">Apply for LOAN</a>
        <Link to ="/lon">
   <input type="submit" value="Downloading" className="Log" id /></Link>
        </div>
        </div>
        </div>
        </div>
    </div>
  );
}
    export default Download;