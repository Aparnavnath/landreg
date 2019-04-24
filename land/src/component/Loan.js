import React, {Component}from 'react';
import  './Loan.css';
import Axios from 'axios';
class Loan extends Component {
    state={
          loan:{
            propertyregisternumber:"",
            Acrecentofpropertyused:"",
            LoanOption:"",
            price:""
        },
        loans:[]
    }
    onSubmitHandler= () => {
        debugger;
        Axios.post(`http://localhost:8080/api/loan`,this.state.loan)
        .then(response => { 
            alert("order submitted!!!");
    });
    }
    onChangeHandler528= (event) =>{
        let loan={...this.state.loan};
        loan.propertyregisternumber=event.target.value; 
        this.setState(
        {
            loan:loan
        }
    );
    }
    onChangeHandler529= (event) =>{
        let loan={...this.state.loan};
        loan.Acrecentofpropertyused=event.target.value; 
        this.setState(
        {
            loan:loan
        }
    );
    }
    onChangeHandler530= (event) =>{
        let loan={...this.state.loan};
        loan.LoanOption=event.target.value; 
        this.setState(
        {
            loan:loan
        }
    );
    }
    onChangeHandler531= (event) =>{
        let loan={...this.state.loan};
        loan. price=event.target.value; 
        this.setState(
        {
            loan:loan
        }
    );
    }


    componentDidMount= () =>{
        Axios.get(`http://localhost:8080/api/loan`)
        .then(response => {
        console.log("loans", response) 
        this.setState({
            loans:response.data.data
    });
    });
    }
render=() =>{
    return(
        
        <div className="loan">
           <h1><u>APPLY FOR LOAN</u></h1>
            <table>
                <tr><td>property register number</td><td><input type="text" onChange={this.onChangeHandler528} value={this.state.loan.propertyregisternumber}/> <br></br></td> </tr>
                <tr><td>Acre/cent of property used</td><td><input type="text"onChange={this.onChangeHandler529} value={this.state.loan.Acrecentofpropertyused} /> <br></br></td> </tr>
                <tr><td>calculate market value</td><td><input type="submit" value="calculate" /></td></tr><br></br>
                <tr><td></td><td><center><input type="text" onChange={this.onChangeHandler531} value={this.state.loan.price} /> <br></br></center></td></tr>
                <tr><td>Loan Option</td>
                <td><select name="type"onChange={this.onChangeHandler530} value={this.state.loan.LoanOption}> >
                        <option value="--">--</option>
                        <option value="SBI">SBI</option>
                        <option value="Federal">Federal</option>
                        <option value="Canara">Canara </option>
                        <option value="South">SouthIndian</option>
                    </select><br></br></td></tr>
                <tr><td><input type="submit"onClick={this.onSubmitHandler} value="submit" /> <br></br></td></tr>
            </table>
        </div>
    );
}}
export default Loan;