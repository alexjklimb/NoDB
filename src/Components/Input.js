import React, {Component} from 'react';
import axios from "axios";
import Runs from './Runs'
import Records from './Records'

class Input extends Component{
    constructor(){
        super();
        this.state = {
        runs:[],
        date:'',
        distance:'',
        speed:'',
        fastest:[],
        nothing:[]
        };
    };
   

    componentDidMount=()=> {
        axios.get( './api/runs' ).then( response => {
          this.setState({ runs: response.data });
        });
      }
    handleChange1=( event )=> {
        this.setState({ date: event.target.value });
      }
    handleChange2=( event )=> {
        this.setState({ distance: event.target.value });
      }
    handleChange3=( event )=> {
        this.setState({ speed: event.target.value });
      }
    createRun=()=> {
        const { date } = this.state;
        const { distance } = this.state;
        const { speed } = this.state;
        axios.post('./api/runs',{date,distance,speed}).then( response => {
        console.log(speed && this.state.fastest>parseInt(speed, 10))
        speed && parseInt(this.state.fastest, 10)>parseInt(speed, 10)?this.setState({nothing:this.state.fastest}):this.setState({fastest:[date,distance,speed]})
        console.log(this.state.fastest)
        this.setState({ runs: response.data });
        this.setState({date:''})
        this.setState({distance:''})
        this.setState({speed:''})
          });
      }
    editRun=( id, date,distance,speed )=> {
        console.log( 'editMessage:', id, date,distance,speed ); 
        axios.put( './api/runs' + `/${id}`, { date,distance,speed } ).then( response => {
            console.log(response.data)
          this.setState({ runs: response.data });
        });
      }
    
    removeMessage=( id )=> {
        axios.delete( './api/runs' + `/${id}` ).then( response => {
          this.setState({ runs: response.data });
        });
      }

    render(){
        return(
            <div className ="Frame">
                <Records info={this.state.fastest}/>
            <div className="InputBox">
                <div className="Input">
                <div>My Run</div>
                <h1>Date: <input placeholder="Date" 
                    onChange={ this.handleChange1 }
                    value={this.state.date}/>
                </h1>
                <h1>Distance: <input placeholder="Distance (mi)" 
                    onChange={ this.handleChange2 }
                    value={ this.state.distance }/>
                </h1>
                <h1>Time: <input placeholder="Time (min)" 
                    onChange={ this.handleChange3 }
                    value={ this.state.speed }/>
                </h1>
                <button onClick={this.createRun}>Add Run</button>
                </div>
            </div>
            <div className="Runs_box">
                
               {
             this.state.runs.map( run => (
               <Runs id={ run.id} date={ run.date } distance={ run.distance } speed={ run.speed } edit={ this.editRun } remove={ this.removeMessage }/>

             ))
           }
            </div>
           </div>
            
        )
    }
}
export default Input;