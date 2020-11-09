import React, { Component } from "react";
import Header from "../src/Components/Header/Header";
import Footer from "../src/Components/Footer/Footer";
import axios from "axios";
import Horolist from "../src/Components/Horolist/Horolist";
import '../src/app.css';
import Sections from "../src/Components/Sections/Sections";

//  Stateful {savedHoros[]}, passes down to Horolist}
// componentDidMount, axios to get saved horos & update this.state.saveHoros
// method to update this.state.savedHoros, pass down as prop to Individual & Horolist
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedHoro: [],
    };
    this.catchHoro = this.catchHoro.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://ohmanda.com/api/horoscope/aquarius")
      .then((res) => {
        this.setState({ savedHoro: res.data });
      })
      .catch((err) => console.log(err));
  }

  catchHoro(horo) {
    axios
      .post("/api/saved-horo", { horo: horo })
      .then((res) => {
        this.setState({ savedHoro: res.data });
      })
      .catch((err) => console.log(err));
  }
  editMood = (id, newMood) => {
    let body = { mood: newMood };

    axios
      .put(`/api/saved-horo/${id}`, body)
      .then((res) => {
        this.setState({ savedHoro: res.data });
      })
      .catch((err) => console.log(err));
  };
  releaseHoro = (id) => {
    axios
      .delete(`/api/saved-horo/${id}`)
      .then((res) => {
        this.setState({ savesHoro: res.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Sections 
        catchFn={this.catchHoro}
        />
         
        <Horolist
          savedHoro={this.state.savedHoro}
          nameFn={this.editMood}
          releaseFn={this.releaseHoro}
        />
        
        <Footer />
       
      </div>
    );
  }
}

export default App;
