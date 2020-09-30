//stateful, { editMode: false, newMood: '' }
//renders an individual saved horo
import React, {Component} from 'react';

class Horo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            moodInput: ''
        }
    }
    handleInput = (val) => {
        this.setState({moodInput: val})
    }
    handleToggle = () => {
        this.setState({isEditing: !this.state.isEditing})
    }
    handleEdit = (id) => {
        this.props.nameFn(id, this.state.moodInput);
        this.handleToggle();
    }
render(){
    return (
        <div className="Horo">
            <img src={this.props.horo.image} alt={this.props.horo.name}/>
            {this.state.isEditing
            ? ( 
        <div>     
            <input
                value={this.state.moodInput}
                onChange={e => this.handleInput(e.target.value)}/>
               <button onClick={() => this.handleEdit(this.props.horo.id)}>Submit</button>
        </div>
    )
    : (
        <div>

        <p>{this.props.horo.name}</p>
        <button onClick={this.handleToggle}>Edit Mood</button>
        </div>
    )}
    <button onClick={() => this.props.releaseFn(this.props.horo.id)}>Release</button>
</div>
    )
}
}
export default Horo;




