import React, { Component } from 'react';
import Logo from './logo.svg';
import './App.css';
import Profile from'./component/Profile';
import Registration from './component/Registration';
import Governprofile from './component/Governprofile';
import Buyerprofile from './component/Buyerprofile';
import Selling from './component/Selling';
import Menu from './component/Menu';
import Login from './component/Login';
import Footer from './component/Footer';
import Sidemenu from './component/Sidemenu';
import Law from './component/Law';
import Commn from './component/Commn';
import Click from './component/Click';
import Liability from './component/Liability';
import { Url } from 'url';
import {Route,BrowserRouter} from 'react-router-dom';
import Download from './component/Download';
import Tax from './component/Tax';
import Loan from './component/Loan';
import Home from './component/Home';
import Personalreg from './component/Personalreg';
import Sold from './component/Sold';
import Header from './component/Header';
import Pbuyer from './component/Pbuyer';
import About from './component/About';
import Name from './component/Name';
import Logout from './component/Logout';
import Displytax from './component/Displytax';

class App extends Component {
  state={
    logininfo:{
     user:"arya"

    }
  }
  setLoginInfo=(userInfo)=>{
    this.setState({
      logininfo:userInfo
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
       <Header />
          <Route exact path="/log" component={(props)=><Login setLoginUser={this.setLoginInfo} {...props} />} />
          <Route exact path="/reg" component={Registration} />
          <Route  path="/reg" component={Menu}/>
          <Route  path="/reg" component={Logout}/>
          <Route exact path="/Gov" component={Governprofile}/>
          <Route  path="/Gov" component={Menu}/>
          <Route  path="/Gov" component={Logout}/>
          <Route exact path="/Buy" component={Buyerprofile}/>
          <Route  path="/Buy" component={Menu}/>
          <Route exact path="/Buy" component={Click}/>
          <Route exact path="/sell" component={Selling}/>
          <Route  path="/sell" component={Menu}/>
          <Route exact path="/sell" component={Click}/>
          <Route  path="/law" component={Law}/> 
          <Route  path="/law" component={Menu}/>
          <Route  path="/law" component={Click}/> 
          <Route path="/com" component={Commn}/> 
          <Route path="/com" component={Click}/>
          <Route  path="/com" component={Menu}/>
          <Route path="/lia" component={Liability}/> 
          <Route path="/lia" component={Click}/> 
          <Route  path="/lia" component={Menu}/>
          <Route  path="/dow" component={Download}/> 
          <Route  path="/dow" component={Click}/> 
          <Route  path="/dow" component={Menu}/>
          <Route  path="/tax" component={Tax}/>
          <Route  path="/lon" component={Loan}/>
          <Route  path="/proreg" component={Personalreg}/>
          <Route  path="/sld" component={Sold}/>
          <Route  path="/sld" component={Click}/>
          <Route  path="/dtax" component={Displytax}/>
          <Route  path="/menu" component={(props)=><Menu appState={this.state} {...props} />}/>

          <Route  path="/back" component={Login}/>
          <Route  path="/bck" component={Login}/>
          <Route  path="/brow" component={Pbuyer}/>
          <Route  path="/brow" component={Click}/>
          <Route  path="/about" component={About}/>
          <Route  path="/logut" component={Login}/>

          <Footer/>
        </div>
      </BrowserRouter>    
    );
  } 
}
export default App;
