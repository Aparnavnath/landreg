import React,{Component} from 'react';
import Axios from 'axios';
import './Pbuyer.css';
class Pbuyer extends Component{
state={
    sell:{
},
    sells:[]
}
    componentDidMount= () =>{
        Axios.get(`http://localhost:8080/api/sell`)
        .then(response => {
        console.log("sells", response) 
        this.setState({
                sells:response.data.data
    })
    });
    }
render=() =>{
    return(
        <div className="by">
                    <div className="labk">
                    <table border="1"><tbody>
                            <tr>
                                <th>SL NO</th>
                                <th>Buyer name</th>
                                <th>Acre needed </th>
                                <th>agreed amount</th>
                                <th>Contact</th>
                            </tr>
                {this.state.sells.map((result,i) =>(
                    <tr><td>{i+1}</td> 
                        <td> {result.Buyername}</td> 
                        <td>{result.Acreneeded}</td> 
                        <td>{result.agreedamount}</td> 
                        <td>{result.Contact}</td>
                    </tr>
            ))} 
            </tbody>
                    </table>   
    </div>
    </div>
)
}
}
export default Pbuyer;