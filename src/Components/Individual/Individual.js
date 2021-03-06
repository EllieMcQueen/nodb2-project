//  stateful, { mood: '' }props..horoChoice
//componentDidUpdate. fire axios to get horo to horoChoice, then display
//horo would have option to save
//method here to fire axios post to save horo sends re.data up to APP (This also will allow the user to add their mood, this add a mood key to the object before sending to axios)
import React, { Component } from "react";
import axios from "axios";

class Individual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: "",
    };
  }

  handleCatch = () => {
    const { sign } = this.props;
    let newHoro = {
      name: sign.name,
      //image: horoscope.sprites.front_default
    };

    this.props.catchFn(newHoro);
    this.props.refreshFn();
  };

  render() {
    return (
      <div>
        <div
          className="Individual"
          onClick={() => this.props.getHoro(this.props.sign.sign)}
        >
          {this.props.sign.sign}
          {/* //<img src={this.props.horoscope.sprites.front_default} alt={this.props.horoscope.name}/> */}
        </div>
      </div>
    );
  }
}
export default Individual;
