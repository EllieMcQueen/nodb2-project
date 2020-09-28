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
            horoChoice: []
        }   
    }
      
    
    componentDidMount(){
        this.gethoroChoice();
    }
    gethoroChoice = () => {
        axios.get('/api/horoChoice')
        .then(res => {
            this.setState({horoChoice: res.data})
        })
        .catch(err => console.log(err))
    }
    render() {
        const mappedHoroscope = this.state.horoChoice.map((horoscope, i) => (
            <Individual
                key={i}
                horoscope={horoscope}
                catchFn={this.props.catchFn}
                refreshFn={this.gethoroChoice}/>            
        ))
        return (
            <div className='horo-flex'>
                {mappedHoroscope}
            </div>        
        )
    }
}

export default Sections;