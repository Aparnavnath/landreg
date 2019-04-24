import React, {Component}from 'react';
import Axios from 'axios';
import './Registration.css';
import { Url } from 'url';
import {Link,Route,BrowserRouter} from 'react-router-dom';
import Selling from './Selling';
import Tax from './Tax';

class Registration extends Component {
     

      state={
            register:{
            PropertyRegisterNumber:"",
            PropertyRegistereddate:"",
            OwnerDetails:"",
            PreviousOwnerDetails:"",
            TypeOfLand:"",
            Acreorsqft:"",
            PayingLandTax:"",
            Username:"",
            Password:"",
            ReenterPassword:"",
            Nominies :""
            },

            registers:[]
            }
      onSubmitHandler= () => {
            debugger;
            Axios.post(`http://localhost:8080/api/registr`,this.state.register)
            .then(response => { 
                  alert("order submitted!!!");
      });
      }
      onChangeHandler1= (event) =>{
            let register={...this.state.register};
            register.PropertyRegisterNumber=event.target.value; 
            this.setState(
            {
                  register:register
            }
      );
      }
      onChangeHandler2= (event) =>{
            let register={...this.state.register};
            register.PropertyRegisterdate=event.target.value; 
            this.setState(
            {
                  register:register
            }
      );
      }
      onChangeHandler3= (event) =>{
            let register={...this.state.register};
            register. OwnerDetails=event.target.value; 
            this.setState(
            {
                  register:register
            }
      );
      }
      onChangeHandler4= (event) =>{
            let register={...this.state.register};
            register. PreviousOwnerDetails=event.target.value; 
            this.setState(
            {
                  register:register
            }
      );
      }
      onChangeHandler5= (event) =>{
            let register={...this.state.register};
            register. TypeOfLand=event.target.value; 
            this.setState(
            {
                  register:register
            }
      );
      }
      onChangeHandler6= (event) =>{
            let register={...this.state.register};
            register. Acreorsqft=event.target.value; 
            this.setState(
            {
                  register:register
            }
      );
      }
      onChangeHandler7= (event) =>{
            let register={...this.state.register};
            register. PayingLandTax=event.target.value; 
            this.setState(
            {
                  register:register
            }
      );
      }
      onChangeHandler8= (event) =>{
            let register={...this.state.register};
            register. Username=event.target.value; 
            this.setState(
            {
                  register:register
            }
      );
      }
      onChangeHandler9= (event) =>{
            let register={...this.state.register};
            register. Password=event.target.value; 
            this.setState(
            {
                  register:register
            }
      );
      }
      onChangeHandler10= (event) =>{
            let register={...this.state.register};
            register. ReenterPassword=event.target.value; 
            this.setState(
            {
                  register:register
            }
      );
      }
      onChangeHandler11= (event) =>{
                  let register={...this.state.register};
                  register.  Nominies=event.target.value; 
                  this.setState(
                  {
                        register:register
                  }
      );
      }
      componentDidMount= () =>{
            Axios.get(`http://localhost:8080/api/registr`)
            .then(response => {
            console.log("registers", response) 
            this.setState({
                  registers:response.data.data
      });
      });
      }
render=() =>{
      return(
      <div className="form">
            {/* <img src={require("./image/newcrop.png")} width="500px" height="100px"/><br></br><br></br> */}
            <tbody>  <table className="asd">
            <tr><td>Property Register Number</td><td><input type="text" onChange={this.onChangeHandler1} value={this.state.register.PropertyRegisterNumber} /> <br></br></td></tr>
            <tr><td>Property Registered date</td><td><input type="Date" onChange={this.onChangeHandler2} value={this.state.register.PropertyRegisterdate}/> <br></br></td></tr>
            <tr><td> Owner Details </td><td><input type="text"onChange={this.onChangeHandler3} value={this.state.register.OwnerDetails}/> <br></br></td></tr>
            <tr><td>Previous Owner Details</td><td><input type="text" onChange={this.onChangeHandler4} value={this.state.register.PreviousOwnerDetails}/> <br></br></td></
            tr>
            <tr><td>Type Of Land</td>
            <td><select name="type"onChange={this.onChangeHandler5} value={this.state.register.TypeOfLand}>
                  <option value="--">--</option>
                  <option value="Land">Land</option>
                  <option value="Apartment">Apartment</option>
            </select><br></br><br></br></td></tr>
            <tr><td>Acre orsq ft</td><td><input type="text" onChange={this.onChangeHandler6} value={this.state.register.Acreorsqft}/><br></br></td></tr>
            <tr><td>Paying Land Tax</td>
            <td><select  onChange={this.onChangeHandler7} value={this.state.register.PayingLandTax}>
                  <option value="--">--</option>
                  <option value="SBI">SBI</option>
                  <option value="Federal">Federal</option>
            </select><br></br></td></tr>
           <tr><td> <label ><b>Username</b></label></td>
           <td> <input type="text" placeholder="Enter Username" name="uname" required  onChange={this.onChangeHandler8} value={this.state.register.Username}/><br></br></td></tr>
            <tr><td> <label ><b>Password</b></label></td>
           <td> <input type="password"  name="psw" required onChange={this.onChangeHandler9} value={this.state.register.Password}/><br></br><br></br></td></tr>
           <tr><td> <label ><b> Re-enter Password</b></label></td>
            <td><input type="password" name="psw" required onChange={this.onChangeHandler10} value={this.state.register.ReenterPassword}/><br></br><br></br></td></tr>
            </table></tbody>
            Nominies<div> <input type="text" placeholder="1."  onChange={this.onChangeHandler11} value={this.state.register.Nominies}/> </div>
            <div> <input type="text" placeholder="2."  onChange={this.onChangeHandler11} value={this.state.register.Nominies}/></div><br></br>
             <input type="submit" onClick={this.onSubmitHandler}
             value="Submit"></input>

                      
      </div>
);
}
}
export default Registration;
