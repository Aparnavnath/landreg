import React, {Component}from 'react';
import Axios from 'axios';
import './Selling.css';
class Selling extends Component {
    state={
          sell:{
            Buyername:"",
            ForAuthentication:"",
            agreedamount:"",
            Acreneeded:""
        },
        sells:[]
    }
    onSubmitHandler= () => {
        debugger;
        Axios.post(`http://localhost:8080/api/sell`,this.state.sell)
        .then(response => { 
            alert("order submitted!!!");
    });
    }
    onChangeHandler28= (event) =>{
        let sell={...this.state.sell};
        sell.Buyername=event.target.value; 
        this.setState(
        {
            sell:sell
        }
    );
    }
    onChangeHandler29= (event) =>{
        let sell={...this.state.sell};
        sell.ForAuthentication=event.target.value; 
        this.setState(
        {
            sell:sell
        }
    );
    }
    onChangeHandler30= (event) =>{
        let sell={...this.state.sell};
        sell.agreedamount=event.target.value; 
        this.setState(
        {
            sell:sell
        }
    );
    }
    onChangeHandler89= (event) =>{
        let sell={...this.state.sell};
        sell.Acreneeded=event.target.value; 
        this.setState(
        {
            sell:sell
        }
    );
    }
    onChangeHandler200= (event) =>{
        let sell={...this.state.sell};
        sell.Contact=event.target.value; 
        this.setState(
        {
            sell:sell
        }
    );
    }

    componentDidMount= () =>{
        Axios.get(`http://localhost:8080/api/sell`)
        .then(response => {
        console.log("sells", response) 
        this.setState({
            sells:response.data.data
    });
    });
    }
render=() =>{
  return(
        <div className="form1">
            <h1>Land Registration System and managing Title Deeds </h1>
            <h3><u>Selling</u></h3>
             <label htmlfor="Bname">Buyer name</label>
                 <div><input type="text" onChange={this.onChangeHandler28} value={this.state.sell.Buyername} id="Buyer name" name="buy" placeholder="Buyer name"/></div>
             <label htmlfor="authen">For Authentication</label> 
                 <div> <input type="text"onChange={this.onChangeHandler29} value={this.state.sell.ForAuthentication} id="authen" name="auth" placeholder="Aadhar Number"/></div> 
            <label htmlfor="acre">Acre needed</label> 
                 <div> <input type="text"onChange={this.onChangeHandler89} value={this.state.sell.Acreneeded} id="authen" name="acre" placeholder="landneeded"/></div> 
                 <label htmlfor="contact">Contact</label> 
                 <div> <input type="text"onChange={this.onChangeHandler200} value={this.state.sell.Contact} id="cont" name="contact" placeholder="mob no."/></div> 
            <input type="submit"  value="GIS VIEW OF LAND"/>
            <label htmlfor="agr">agreed amount</label>
                 <div><input type="text"onChange={this.onChangeHandler30} value={this.state.sell.agreedamount} id="agr" name="agd" placeholder="agreed amount"/></div>
            <input type="submit" onClick={this.onSubmitHandler} value="Submit"/>
     </div>
    );
}
}
export default Selling;