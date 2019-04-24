import React, {Component}from 'react';
import Axios from 'axios';
import './Buyerprofile.css';
import Law from './Law';
import Liability from './Liability';
import Commn from './Commn';
import Download from './Download';
import { Url } from 'url';
import {Link,Route,BrowserRouter} from 'react-router-dom';
class Buyerprofile extends Component {
    state={
        buyer:{
            PropertyRegisterNumber:"",
            CurrentOwnerAddress:"",
            CurrentOwnerAddress:"",
            Contact:"",
            PreviousOwnerAddress:"",
            TypeOfLand:"",
            PreviousLandRentDetails:"",
            PossessionCertificate:"",
            EncumbranceCertificate:"",
            Verified:"",
            AgreedAmount:"",
            Acre:"",
            Shapeofland :"",
            Locationofland:""
        },
    buyers:[]
            }
    onSubmitHandler= () => {
        debugger;
        Axios.post(`http://localhost:8080/api/buyer`,this.state.buyer)
        .then(response => { 
            if(response.data.status!="error")
            {
            debugger;
            alert("sucess");
            }
            else if(response.data.status="error")
            {
            debugger;
            alert("Submission not done!!!");
            }
            })
                // alert("order submitted!!!");
                // });
    }
    onChangeHandler15= (event) =>{
        let buyer={...this.state.buyer};
        buyer.PropertyRegisterNumber=event.target.value; 
        this.setState(
        {
            buyer:buyer
        }
);
}
    onChangeHandler16= (event) =>{
            let buyer={...this.state.buyer};
            buyer.CurrentOwnerName=event.target.value; 
            this.setState(
            {
                buyer:buyer
            }
    );
    }
    onChangeHandler17= (event) =>{
            let buyer={...this.state.buyer};
            buyer.CurrentOwnerAddress=event.target.value; 
            this.setState(
            {
                buyer:buyer
            }
    );
    }
    onChangeHandler18= (event) =>{
            let buyer={...this.state.buyer};
            buyer.PreviousOwnerAddress=event.target.value; 
            this.setState(
            {
                buyer:buyer
            }
    );
    }
    onChangeHandler19= (event) =>{
            let buyer={...this.state.buyer};
            buyer. TypeOfLand=event.target.value; 
            this.setState(
            {
                buyer:buyer
            }
    );
    }
    onChangeHandler20= (event) =>{
            let buyer={...this.state.buyer};
            buyer. PreviousLandRentDetails=event.target.value; 
            this.setState(
            {
                buyer:buyer
            }
    );
    }
    onChangeHandler21= (event) =>{
            let buyer={...this.state.buyer};
            buyer. PossessionCertificate=event.target.value; 
            this.setState(
            {
                buyer:buyer
            }
    );
    }
    onChangeHandler22= (event) =>{
            let buyer={...this.state.buyer};
            buyer.EncumbranceCertificate=event.target.value; 
            this.setState(
            {
                buyer:buyer
            }
    );
    }
    onChangeHandler23= (event) =>{
            let buyer={...this.state.buyer};
            buyer.Verified=event.target.value; 
            this.setState(
            {
                buyer:buyer
            }
    );
    }
    onChangeHandler24= (event) =>{
            let buyer={...this.state.buyer};
            buyer.AgreedAmount=event.target.value; 
            this.setState(
            {
                buyer:buyer
            }
    );
    }
    onChangeHandler88= (event) =>{
            let buyer={...this.state.buyer};
            buyer.Acre=event.target.value; 
            this.setState(
            {
                buyer:buyer
            }
    );
    }
    onChangeHandler87= (event) =>{
            let buyer={...this.state.buyer};
            buyer.Shapeofland =event.target.value; 
            this.setState(
            {
                buyer:buyer
            }
    );
    }
        onChangeHandler108= (event) =>{
                let buyer={...this.state.buyer};
                buyer.Locationofland =event.target.value; 
                this.setState(
                {
                    buyer:buyer
                }
        );
        }
        onChangeHandler109= (event) =>{
            let buyer={...this.state.buyer};
            buyer.Contact =event.target.value; 
            this.setState(
            {
                buyer:buyer
            }
    );
    }
//     componentDidMount= () =>{  
//             Axios.get(`http://localhost:8080/api/buyer`)
//             .then(response => {
//             console.log("buyers", response) 
//             this.setState({
//                 buyers:response.data.data
//     });
//     });
// }
    render=() =>{
        return(
            <div className="form2">
                <h1>Land Registration System and managing Title Deeds using GIS</h1><br></br><br></br>
                <h3><u>land Details for sale</u></h3>
                    <label htmlfor="fname">Property Register Number</label>
                        <div> <input type="text"  onChange={this.onChangeHandler15} value={this.state.buyer.PropertyRegisterNumber}id="fname" name="reg id" placeholder="survey number"/></div>
                    <label htmlfor="cname">Current Owner Name</label>
                        <div> <input type="text" onChange={this.onChangeHandler16} value={this.state.buyer.CurrentOwnerName}id="cname" name="reg" placeholder="current ownername"/></div>
                    <label htmlfor="cadd">Current Owner Address</label>
                        <div> <input type="text"onChange={this.onChangeHandler17} value={this.state.buyer.CurrentOwnerAddress} id="cadd" name="add" placeholder="current ownername addresss"/></div>
                        <label htmlfor="cadd">Contact</label>
                        <div> <input type="text"onChange={this.onChangeHandler109} value={this.state.buyer.Contact} id="cadd" name="add" placeholder="mobile"/></div>

                    <label htmlfor="padd">Previous Owner Address</label>
                        <div>  <input type="text"onChange={this.onChangeHandler18} value={this.state.buyer.PreviousOwnerAddress} id="padd" name="pdd" placeholder="previous ownername addresss"/></div>
                    <label htmlfor="type">Type Of Land</label>
                        <div> <input type="text"onChange={this.onChangeHandler19} value={this.state.buyer.TypeOfLand} id="type" name="typr" placeholder="type of land"/></div>
                    <label htmlfor="type">Acre</label>
                        <div> <input type="text"onChange={this.onChangeHandler88} value={this.state.buyer.Acre} id="type" name="are" placeholder="Acre"/></div>
                    <label htmlfor="type">Shape of land</label>
                        <div> <input type="text"onChange={this.onChangeHandler87} value={this.state.buyer.Shapeofland} id="type" name="shap" placeholder="Shape of land"/></div>
                    <label htmlfor="type">Location of land</label>
                        <div> <input type="text"onChange={this.onChangeHandler108} value={this.state.buyer.Locationofland} id="type" name="loc" placeholder="location of land"/></div>
                    <label htmlfor="previous">Previous Land Rent Details</label>
                        <div> <input type="text"onChange={this.onChangeHandler20} value={this.state.buyer.PreviousLandRentDetails} id="previous" name="pre" placeholder="Previous land rent details"/></div>
                    <label htmlfor="poss">Possession Certificate</label>
                        <div> <input type="text"onChange={this.onChangeHandler21} value={this.state.buyer.PossessionCertificate} id="poss" name="posss" placeholder="Possession certificate"/></div>
                    <label htmlfor="encum">Encumbrance Certificate</label>
                        <div> <input type="text"onChange={this.onChangeHandler22} value={this.state.buyer.EncumbranceCertificate} id="encum" name="encumm" placeholder="Encumbrance certificate"/></div>
                    <label htmlfor="ver">Verified</label>
                        <div><input type="radio"onChange={this.onChangeHandler23} value={this.state.buyer.Verified} name="verfied" id="a" value="Yes"/> Yes</div>
                        <div><input type="radio"onChange={this.onChangeHandler23} value={this.state.buyer.Verified} name="verfied" id="b" value="No"/> No </div>
                        <Link to ="/dtax" > <input type="submit" value="Viewtax" /></Link> <br></br>

                    <label htmlfor="agrd">Agreed Amount</label>
                        <div>  <input type="text"onChange={this.onChangeHandler24} value={this.state.buyer.AgreedAmount} id="agrd" name="agd" placeholder="Agreed Amount"/> &nbsp;&nbsp;
                        <input type="submit"value="GIS INFORMATION OF LAND"/>
                    <input type="submit"onClick={this.onSubmitHandler} value="Agreed"/>
        </div>
       </div>
    );
}}
export default Buyerprofile;
