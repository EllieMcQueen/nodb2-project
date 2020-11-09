// Stateful{horoChoice:'}
//list out horo categories. if they choose scorpio then we setState with choice, and pass down choice to Individual.js method that fires axios to get 3rd party API horo & render Individual

import React, { Component } from "react";
import axios from "axios";
import '../../../src/app.css';
import Individual from '../Individual/Individual';

class Sections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signs: [],
      sign: {},
    };
  }

  componentDidMount() {
    this.getSigns();
  }

  getSigns = () => {
    axios
      .get("/api/signs")
      .then((res) => {
        this.setState({ signs: res.data });
        console.log("line 26 checking STATE", this.state);
      })
      .catch((err) => console.log(err));
  };

  getHoro = (sign) => {
    axios.get(`/api/horo/${sign.toLowerCase()}`) 
    .then(res => {
        this.setState({sign: res.data})
    })
    .catch(err => console.log(err))
}

  render() {
      console.log(this.state)

    let sign = <p>Choose a sign!</p>

    if (this.state.sign.horoscope) {
        sign = (
            <>
                <p>Selected {this.state.sign.sign}</p>
                <p>{this.state.sign.horoscope}</p>
            </>
        )
    }

    const signList = this.state.signs.map((sign) => (
      <Individual key={sign.id} getHoro={this.getHoro} sign={sign} catchFn={this.props.catchFn} />
    ));
    return (
      <div className="horo-flex">
        {signList}
        {/* Show selected here */}
        {sign}
      </div>
    );
  }
}

export default Sections;
