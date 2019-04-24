import React, {Component}from 'react';
import Axios from 'axios';
import './Tax.css';
class Tax extends Component {
      state={
            tax:{
              t1:"",
              t2:"",
              t3:"",
              t4:"",
              t5:"",
              t6:"",
              t7:""
          },
          taxs:[]
      }
      onSubmitHandler= () => {
      debugger;
      Axios.post(`http://localhost:8080/api/tax`,this.state.tax)
      .then(response => { 
      alert("order submitted!!!");
      });
  }
      onChangeHandler98= (event) =>{
            let tax={...this.state.tax};
            tax.t1=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler97= (event) =>{
            let tax={...this.state.tax};
            tax.t2=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler96= (event) =>{
            let tax={...this.state.tax};
            tax.t3=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler95= (event) =>{
            let tax={...this.state.tax};
            tax.t4=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler94= (event) =>{
            let tax={...this.state.tax};
            tax.t5=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler93= (event) =>{
            let tax={...this.state.tax};
            tax.t6=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler92= (event) =>{
            let tax={...this.state.tax};
            tax.t7=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler91= (event) =>{
            let tax={...this.state.tax};
            tax.t8=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler90= (event) =>{
            let tax={...this.state.tax};
            tax.t9=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler86= (event) =>{
            let tax={...this.state.tax};
            tax.t10=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler85= (event) =>{
            let tax={...this.state.tax};
            tax.t11=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler84= (event) =>{
            let tax={...this.state.tax};
            tax.t12=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler83= (event) =>{
            let tax={...this.state.tax};
            tax.t13=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler82= (event) =>{
            let tax={...this.state.tax};
            tax.t14=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler81= (event) =>{
            let tax={...this.state.tax};
            tax.t15=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler80= (event) =>{
            let tax={...this.state.tax};
            tax.t16=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler79= (event) =>{
            let tax={...this.state.tax};
            tax.t17=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler78= (event) =>{
            let tax={...this.state.tax};
            tax.t18=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler77= (event) =>{
            let tax={...this.state.tax};
            tax.t19=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler76= (event) =>{
            let tax={...this.state.tax};
            tax.t20=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler75= (event) =>{
            let tax={...this.state.tax};
            tax.t21=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler74= (event) =>{
            let tax={...this.state.tax};
            tax.t22=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler73= (event) =>{
            let tax={...this.state.tax};
            tax.t23=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler72= (event) =>{
            let tax={...this.state.tax};
            tax.t24=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler71= (event) =>{
            let tax={...this.state.tax};
            tax.t25=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler70= (event) =>{
            let tax={...this.state.tax};
            tax.t26=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler69= (event) =>{
            let tax={...this.state.tax};
            tax.t27=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler68= (event) =>{
            let tax={...this.state.tax};
            tax.t28=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler67= (event) =>{
            let tax={...this.state.tax};
            tax.t29=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler66= (event) =>{
            let tax={...this.state.tax};
            tax.t30=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler65= (event) =>{
            let tax={...this.state.tax};
            tax.t31=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler64= (event) =>{
            let tax={...this.state.tax};
            tax.t32=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler63= (event) =>{
            let tax={...this.state.tax};
            tax.t33=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler62= (event) =>{
            let tax={...this.state.tax};
            tax.t34=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }
      onChangeHandler61= (event) =>{
            let tax={...this.state.tax};
            tax.t35=event.target.value; 
            this.setState(
                  {
                  tax:tax
                  }
            );
      }

                                                
          componentDidMount= () =>{
            Axios.get(`http://localhost:8080/api/tax`)
            .then(response => {
            console.log("taxs", response) 
            this.setState({
            taxs:response.data.data
            });
            });
            }
    render=() =>{
    return(
<div className="tax">
      <h1>LAND TAX</h1>
            <center><div> <table border="2" color="black">
                  <tr>
                        <th>Propery Register Number</th>
                        <th>Acre/sq.ft</th>
                        <th>Current Owner Name</th>
                        <th>Name Of tax Payed</th>
                        <th>Year Of Tax</th>
                        <th>Tax</th>
                        <th> Remarks</th>
                  </tr>
                  <tr>
                        <td><input type="text"onChange={this.onChangeHandler98} value={this.state.tax.t1}/></td>
                        <td><input type="text"onChange={this.onChangeHandler97} value={this.state.tax.t2}/></td>
                        <td><input type="text"onChange={this.onChangeHandler96} value={this.state.tax.t3}/></td>
                        <td><input type="text"onChange={this.onChangeHandler95} value={this.state.tax.t4}/></td>
                        <td><input type="text"onChange={this.onChangeHandler94} value={this.state.tax.t5}/></td>
                        <td><input type="text"onChange={this.onChangeHandler93} value={this.state.tax.t6}/></td>
                        <td><input type="text"onChange={this.onChangeHandler92} value={this.state.tax.t7}/></td>
                  </tr>
                  <tr>
                        <td><input type="text"onChange={this.onChangeHandler91} value={this.state.tax.t8}/></td>
                        <td><input type="text"onChange={this.onChangeHandler90} value={this.state.tax.t9}/></td>
                        <td><input type="text"onChange={this.onChangeHandler86} value={this.state.tax.t10}/></td>
                        <td><input type="text"onChange={this.onChangeHandler85} value={this.state.tax.t11}/></td>
                        <td><input type="text"onChange={this.onChangeHandler84} value={this.state.tax.t12}/></td>
                        <td><input type="text"onChange={this.onChangeHandler83} value={this.state.tax.t13}/></td>
                          <td><input type="text"onChange={this.onChangeHandler82} value={this.state.tax.t14}/></td>
                  </tr>
                  <tr>
                        <td><input type="text"onChange={this.onChangeHandler81} value={this.state.tax.t15}/></td>
                        <td><input type="text"onChange={this.onChangeHandler80} value={this.state.tax.t16}/></td>
                        <td><input type="text"onChange={this.onChangeHandler79} value={this.state.tax.t17}/></td>
                        <td><input type="text"onChange={this.onChangeHandler78} value={this.state.tax.t18}/></td>
                        <td><input type="text"onChange={this.onChangeHandler77} value={this.state.tax.t19}/></td>
                        <td><input type="text"onChange={this.onChangeHandler76} value={this.state.tax.t20}/></td>
                        <td><input type="text"onChange={this.onChangeHandler75} value={this.state.tax.t21}/></td>
                  </tr>
                  <tr>
                        <td><input type="text"onChange={this.onChangeHandler74} value={this.state.tax.t22}/></td>
                        <td><input type="text"onChange={this.onChangeHandler73} value={this.state.tax.t23}/></td>
                        <td><input type="text"onChange={this.onChangeHandler72} value={this.state.tax.t24}/></td>
                        <td><input type="text"onChange={this.onChangeHandler71} value={this.state.tax.t25}/></td>
                        <td><input type="text"onChange={this.onChangeHandler70} value={this.state.tax.t26}/></td>
                        <td><input type="text"onChange={this.onChangeHandler69} value={this.state.tax.t27}/></td>
                        <td><input type="text"onChange={this.onChangeHandler68} value={this.state.tax.t28}/></td>
                  </tr>
                  <tr>
                        <td><input type="text"onChange={this.onChangeHandler67} value={this.state.tax.t29}/></td>
                        <td><input type="text"onChange={this.onChangeHandler66} value={this.state.tax.t30}/></td>
                        <td><input type="text"onChange={this.onChangeHandler65} value={this.state.tax.t13}/></td>
                        <td><input type="text"onChange={this.onChangeHandler64} value={this.state.tax.t32}/></td>
                        <td><input type="text"onChange={this.onChangeHandler63} value={this.state.tax.t33}/></td>
                        <td><input type="text"onChange={this.onChangeHandler62} value={this.state.tax.t34}/></td>
                        <td><input type="text"onChange={this.onChangeHandler61} value={this.state.tax.t35}/></td>
                  </tr>
    </table>
    </div></center>
 <center> <input type="submit"onClick={this.onSubmitHandler} value="Generate"/></center>

        </div>
         );
        }
      }
        export default Tax;