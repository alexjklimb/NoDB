import React, {Component} from 'react';
import Run from './Run'
class Runs extends Component{
    constructor(props) {
        super(props);
        this.state = {
          editing: false,
          date:this.props.date,
          distance: this.props.distance,
          speed:this.props.speed
        };
    };
    handleChange1=( event )=> {
        this.setState({ date: event.target.value });
      }
    handleChange2=( event )=> {
        this.setState({ distance: event.target.value });
      }
    handleChange3=( event )=> {
        this.setState({ speed: event.target.value });
      }
    edit=( event )=> {
        const { date } = this.state;
        const {distance} = this.state;
        const {speed} = this.state;
        const { id, edit } = this.props;
        console.log(id, date,distance,speed)
        if( event.key === "Enter" ) {
          edit( id, date,distance,speed );
          this.setState({ editing: false });
        }
      }
      
    


      render() {
        const { id, date, distance, speed, edit, remove } = this.props;
        return (
          <div>
              <div className="Box">
            {
              this.state.editing ?
              <div>
                <input className="Runs_input" value={ this.state.text } onChange={ this.handleChange1 } onKeyPress={ this.edit } ></input>
                <input className="Runs_input" value={ this.state.text } onChange={ this.handleChange2 } onKeyPress={ this.edit } ></input>
                <input className="Runs_input" value={ this.state.text } onChange={ this.handleChange3 } onKeyPress={ this.edit } ></input>
                </div>
              :
                <div>Run {id+1}<br></br> Date: {date} <br></br> Distance: {distance} Miles<br></br> Time: {speed} Mins<br></br></div>
            }
            <span className="Run__edit" onClick={ () => this.setState({ editing: true, date,distance,speed }) }> Edit </span>
            <span className="Run__delete" onClick={ () => remove( id ) }> Delete </span>
            </div>
          </div>
        )
      }
    }
    export default Runs;