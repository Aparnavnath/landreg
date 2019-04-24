import React,{Component} from 'react';
import Axios from 'axios';
import './Sold.css';
class Sold extends Component{
state={
    buyer:{
},
    buyers:[]
}
    componentDidMount= () =>{
        Axios.get(`http://localhost:8080/api/buyer`)
        .then(response => {
        console.log("buyers", response) 
        this.setState({
                buyers:response.data.data
    })
    });
    }
render=() =>{
    return(
        <div className="sol">
                    <div className="labf">
                    <table border="1"><tbody>
                            <tr>
                                <th>SL NO</th>
                                <th>Property Register Number </th>
                                <th>Acre</th>
                                <th>Location of land</th>
                                <th>Type Of Land</th>
                                <th>Shape ofland</th>
                                <th>Contact</th>
                            </tr>
                {this.state.buyers.map((result,i) =>(
                    
                    <tr><td>{i+1}</td> 
                        <td> {result.PropertyRegisterNumber}</td> 
                        <td>{result.Acre}</td> 
                        <td>{result.Locationofland}</td> 
                        <td>{result.TypeOfLand}</td>
                        <td>{result.Shapeofland}</td> 
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
export default Sold;