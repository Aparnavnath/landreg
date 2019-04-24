import React,{Component} from 'react';
import Axios from 'axios';
import './Displytax.css';
class Displytax extends Component{
state={
    tax:{
},
taxs:[]
}
    componentDidMount= () =>{
        Axios.get(`http://localhost:8080/api/tax`)
        .then(response => {
        console.log("taxs", response) 
        this.setState({
            taxs:response.data.data
    })
    });
    }
render=() =>{
    return(
        <div className="datx">
                    <div className="dtx">
                    <table border="1"><tbody>
                            <tr>
                                <th>SL NO</th>
                                <th>Property Register Number </th>
                                <th>Acre</th>
                                <th>Current Owner Name</th>
                                <th>Name Of tax Payed</th>
                                <th>Year Of Tax</th>
                                <th>Tax</th>
                                <th>Remarks</th>
                            </tr>
                {this.state.taxs.map((result,i) =>(
                    
                        <tr><td>{i+1}</td> 
                        <td> {result.t1}</td> 
                        <td>{result.t2}</td> 
                        <td>{result.t3}</td> 
                        <td>{result.t4}</td>
                        <td>{result.t5}</td> 
                        <td>{result.t6}</td> 
                        <td>{result.t7}</td> 
                    </tr>
            ))} 
            </tbody>
                    </table>   
    </div>
    </div>
)
}
}
export default Displytax;