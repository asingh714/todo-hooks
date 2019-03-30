import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    title: "This is a title",
    inputText: ""
  }

  updateInput = e => {
    this.setState({ inputText: e.target.value })
  }

  updateTitle = e => {
    e.preventDefault();
    this.setState({ title: this.state.inputText })
  }
  
  render() {
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <form onSubmit={this.updateTitle}>
          <input 
          type="text"
          value={this.state.inputText}
          onChange={this.updateInput}
          />
          <button>Set Title</button>
        </form>
      </div>
    );
  }
}

export default App;
