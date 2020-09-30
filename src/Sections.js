// Stateful{horoChoice:'}
//list out horo categories. if they choose scorpio then we setState with choice, and pass down choice to Individual.js method that fires axios to get 3rd party API horo & render Individual 

import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Individual from './Individual';


class Sections extends Component {
    constructor(props){
        super(props);
        this.state = {
            signs: []
        }   
    }      
    
    componentDidMount(){
        this.getSigns();
    }

    getSigns = () => {
        axios.get('/api/signs') 
        .then(res => {
            this.setState({signs: res.data})
            console.log('line 26 checking STATE',this.state)
        })
        .catch(err => console.log(err))
}

    

    render() {
        const signList = this.state.signs.map((sign) => (
            <Individual
                key={sign.id}
                sign={sign}
                catchFn={this.props.catchFn}/>            
        ))
        return (
            <div className='horo-flex'>
                {signList}
            </div>        
        )
    }
}

export default Sections;