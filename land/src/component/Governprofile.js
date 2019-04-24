import React, {Component}from 'react';
import Axios from 'axios';
import { Url } from 'url';
import {Link,Route,BrowserRouter} from 'react-router-dom';
import './Governprofile.css';
import Tax from './Tax';
class Governprofile extends Component {
  state={
      govr:{
          PropertyRegisterNumber:"",
          ownerdetails:"",
          Notifications:""
      },
  govrs:[]
          }
  onSubmitHandler= () => {
      debugger;
      Axios.post(`http://localhost:8080/api/govr`,this.state.govr)
      .then(response => { 
          alert("order submitted!!!");
});
}
  onChangeHandler25= (event) =>{
        let govr={...this.state.govr};
        govr.PropertyRegisterNumber=event.target.value; 
        this.setState(
        {
            govr:govr
        }
  );
  }
  onChangeHandler26= (event) =>{
      let govr={...this.state.govr};
      govr. ownerdetails=event.target.value; 
      this.setState(
      {
          govr:govr
      }
  );
  }
    onChangeHandler27= (event) =>{
          let govr={...this.state.govr};
          govr. Notifications=event.target.value; 
          this.setState(
          {
              govr:govr
          }
      );
      }
    componentDidMount= () =>{ 
        Axios.get(`http://localhost:8080/api/govr`)
        .then(response => {
        console.log("govrs", response) 
        this.setState({
            govrs:response.data.data
    });
    });
    }
render=() =>{
    return(
        <div className="form3">
            <div className="pic"> <img src={require("../image/download.jpg")} width="" height="200px" align="center" /></div><br></br><br></br><br></br>
            <h1><u>Land Registration System and managing Title Deeds using GIS</u></h1>
              <tbody><table className="do">
                        <tr><td>property register number</td> <td><input type="text" onChange={this.onChangeHandler25} value={this.state.govr.PropertyRegisterNumber} /></td></tr>
                        <tr><td> owner details</td> <td> <input type="text"onChange={this.onChangeHandler26} value={this.state.govr.ownerdetails}/> </td></tr>
                        <tr><td> Notifications</td> <td> <input type="text" onChange={this.onChangeHandler27} value={this.state.govr.Notifications}/> </td></tr>
                    </table></tbody>                      
              <input type="submit"  value="View property details"/>
              <Link to ="/tax" > <input type="submit" value="Viewtax" /></Link> 
              <Link to ="/dtax" > <input type="submit" value="View Previous Tax Details" /></Link> <br></br>
               <input type="submit" onClick={this.onSubmitHandler} value="Proceed"/>
        </div>
    );
}
}
export default Governprofile;