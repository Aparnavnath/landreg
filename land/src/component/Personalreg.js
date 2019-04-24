import React, {Component}from 'react';
import Axios from 'axios';
import './Personalreg.css';
import { Url } from 'url';
import {Link,Route,BrowserRouter} from 'react-router-dom';
import Selling from './Selling';
import Tax from './Tax';

class Personalreg extends Component {
    state={
        personreg:{
            Fullname  :"",
            Aadharnumber:"",
            EmailId :"",
            Address :"",
            phonenumber :"",
            Password :"",
            RenterPassword :"",
            Category:"",
    },
    personregs:[]
}
onSubmitHandler= () => {
    debugger;
    Axios.post(`http://localhost:8080/api/personreg`,this.state.personreg)
    .then(response => { 
        if(response.data.status!="error")
{
debugger;
alert("sucess");
}
else if(response.data.status="error")
{
debugger;
alert("Registeration not done!!!");
}
})
    // alert("order submitted!!!");
    // });
}
onChangeHandler32= (event) =>{
    let personreg={...this.state.personreg};
    personreg.Fullname=event.target.value; 
    this.setState(
    {
        personreg:personreg
    }
    );
}
onChangeHandler33= (event) =>{
let personreg={...this.state.personreg};
personreg.Aadharnumber=event.target.value; 
this.setState(
{
    personreg:personreg
}
);
}
onChangeHandler34= (event) =>{
let personreg={...this.state.personreg};
personreg.EmailId=event.target.value; 
this.setState(
{
personreg:personreg
}
);
}
onChangeHandler35= (event) =>{
let personreg={...this.state.personreg};
personreg.Address=event.target.value; 
this.setState(
{
personreg:personreg
}
);
}
onChangeHandler36= (event) =>{
let personreg={...this.state.personreg};
personreg.phonenumber=event.target.value; 
this.setState(
{
personreg:personreg
}
);
}
onChangeHandler37= (event) =>{
let personreg={...this.state.personreg};
personreg.Password=event.target.value; 
this.setState(
{
personreg:personreg
}
);
}
onChangeHandler38= (event) =>{
let personreg={...this.state.personreg};
personreg.RenterPassword=event.target.value; 
this.setState(
{
personreg:personreg
}
);
}
onChangeHandler201= (event) =>{
    let personreg={...this.state.personreg};
    personreg.Category=event.target.value; 
    this.setState(
    {
    personreg:personreg
    }
    );
    }
    
// componentDidMount= () =>{
// Axios.get(`http://localhost:8080/api/personreg`)
// .then(response => {
// console.log("personregs", response) 
// this.setState({
// personregs:response.data.data
// });
// });
// }
    render=() =>{
            return(
                <div className="form6">
                        <center> <h1>Registration Form</h1></center>
                     <div className="per">   <center><table className="tbl" ><tbody>
                     <tr><td>Fullname</td><td><input type="text" onChange={this.onChangeHandler32} value={this.state.personreg.Fullname} /> <br></br></td></tr>
                       {/* <tr><td>Aadhar number</td><td><input type="number" onChange={this.onChangeHandler33} value={this.state.personreg.Aadharnumber} /></td></tr> */}
                       <tr><td>Aadhar number</td><td><input type='text' onChange={this.onChangeHandler33} value={this.state.personreg.Aadharnumber}  /></td></tr>
                       <tr><td>Email Id</td><td><input type="text" onChange={this.onChangeHandler34} value={this.state.personreg.EmailId} /></td></tr>
                       <tr><td>Address</td><td><input type="text" onChange={this.onChangeHandler35} value={this.state.personreg.Address} /></td></tr>
                       <tr><td>phone number</td><td><input type="text" onChange={this.onChangeHandler36} value={this.state.personreg.phonenumber} /></td></tr>
                       <tr><td>Password</td><td><input type="password" onChange={this.onChangeHandler37} value={this.state.personreg.Password} /></td></tr>
                       <tr><td>RenterPassword</td><td><input type="password" onChange={this.onChangeHandler38} value={this.state.personreg.RenterPassword} /></td></tr>
                       <tr><td>Category</td></tr>
                       <tr><td><select name="type" onChange={this.onChangeHandler201} value={this.state.personreg.Category} > 
                        <option value="--">--</option>
                        <option value="OFFICER">OFFICER</option>
                        <option value="SELLER/BUYER">SELLER/BUYER</option>
                    </select><br></br></td></tr>
                      </tbody></table>
                       <input type="submit" onClick={this.onSubmitHandler} value="Submit"></input></center></div>
                </div>
);
}
}
export default Personalreg;
