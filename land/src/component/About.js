import React from 'react';
import './About.css';
const About = ()=>{
    return(
        <div className="abv">
            <h1><u>About us</u></h1>
            <ol type="*">
                <li><h4><p>The main problem noticed in the existing is the presence of a third person like broker …..</p></h4></li>
                <li><h4><p>The current system reduce the fee for the third party but still required for communication between two parties.Seller or buyer can register to the site but they already want know to about the seller/buyer details </p></h4> </li>
                <li><h4>  <p>The main goal of the project is to : </p></h4> </li>
                <ol type="a">
                    <li><h5><p>reduce the involvement of the third party and make communication between seller and buyer directly.</p></h5></li>
                    <li><h5><p>loan can be taken for the property based on the current market value.</p></h5></li> 
                    <li><h5><p>notification is provided when any of the property is ready for sale.</p></h5></li>
                    <li><h5><p>user(seller/buyer)can view their details by login into this site</p></h5></li>
                    <li><h5><p>Use GIS technology to provide geographical details about the property and also provide information about title deeds.</p></h5></li>
                    <li><h5><p>By using the Block-Chain technology we can sure that our datas are highly secure and no fault will occur , reliability is the main goal</p></h5></li>
                    <li><h5><p>Registrar officer are the eye witness here</p></h5></li>
                    </ol>
            </ol>
    </div>
    );
}
export default About;