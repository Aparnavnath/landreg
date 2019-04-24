import React, {Component}from 'react';
import Axios from 'axios';
import './Login.css';
      class Login extends Component {
            constructor (props){
                  super(props);
                }
            state={
                  login:{
                        EmailId:"",
                        Password:""
                  },
                  errorString:"",
                  logs:[]
                  }
                  onSubmitHandler= () => {
                        let userparams={
                              EmailId:document.getElementById('EmailId').value,
                              Password:document.getElementById('Password').value
                        }
                        debugger;
                        console.log(userparams);
                        Axios.post(`http://localhost:8080/api/login`,userparams)
                        .then(res => {
                          console.log(res);
                          if(res.data.success)    
                              {
            debugger;
            switch(res.data.user.Category){
                case 'OFFICER':
                    this.props.history.push('/Gov');
                break;
                case 'SELLER/BUYER':
                  this.props.history.push('./menu');
                break;
            }
      }
                          else
                          {
                            this.setState({
                              login:{
                                    EmailId:"",
                                    Password:""
                             },
                              errorString:"Invalid Username or Password. Please try again"
                            })
                          }
                        })
                        .catch(err => {
                          console.error(err);
                          alert('Error logging in please try again');
                          debugger;
                          console.log(this.EmailId);
                        });
                      }
            //       onSubmitHandler= () => {
            //       debugger;
            //       Axios.post(`http://localhost:8080/api/login`,this.state.login)
            //       .then(response => { 
            //       alert("order submitted!!!");
            //       });
            // }
                  onChangeHandler13= (event) =>{
                  let login={...this.state.login};
                  login.EmailId=event.target.value; 
                  this.setState(
                  {
                  login:login
                  }
                  );
                  }
            onChangeHandler14= (event) =>{
                  let login={...this.state.login};
                  login.Password=event.target.value; 
                  this.setState(
                  {
                  login:login
                  }
                  );
                  }
      
                  componentDidMount= () =>{
                        Axios.get(`http://localhost:8080/api/login`)
                        .then(response => {
                        console.log("log", response) 
                        this.setState({
                              logs:response.data.data
                        });
                        });
                        }
render=() =>{
                  return(
                  <div>
                        <body>
                              <div className="login">
                                    <h1>Login</h1>
                                    <br />
                                    <input type="email" onChange={this.onChangeHandler13} value={this.state.login.EmailId} placeholder="Email" id="EmailId" className="Logo"  />  
                                    <input type="password" onChange={this.onChangeHandler14} value={this.state.login.Password} placeholder="Password" id="Password" className="Logo" />  
                                    <div>{this.state.errorString }</div>
                                    <a href="#" className="forgot">Forgot Password?</a>
                                    <input type="submit" onClick={this.onSubmitHandler} value="Sign In" className="Logo1" />
                              </div>
                                    <div className="shadow"></div>
                        </body>
            </div>
  );
}
      }
export default Login; 