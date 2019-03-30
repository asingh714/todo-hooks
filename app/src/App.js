import React, { Component, useState } from "react";
import "./App.css";

export class App extends Component {
  state = {
    title: "This is a title",
    inputText: ""
  };

  updateInput = e => {
    this.setState({ inputText: e.target.value });
  };

  updateTitle = e => {
    e.preventDefault();
    this.setState({ title: this.state.inputText });
  };

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

export default function HooksApp() {
  const [title, setTitle] = useState("I am a title using hooks.");
  const titleInput = useInput();
  const secondInput = useInput();

  const updateTitle = e => {
    e.preventDefault();
    setTitle(titleInput.value);
    titleInput.setValue("");
  };

  return (
    <div className="App">
      <h1>{title}</h1>
      <form onSubmit={updateTitle}>
        <input
          type="text"
          value={titleInput.value}
          onChange={titleInput.updateValue}
        />
        <input
          type="text"
          value={secondInput.value}
          onChange={secondInput.updateValue}
        />
        <button>Set Title</button>
      </form>
    </div>
  );
}

const useInput = () => {
  const [value, setValue] = useState("");

  const updateValue = e => {
    setValue(e.target.value);
  };

  return { value, updateValue, setValue };
};

/* 
const obj = { oneProp: 'one', twoProp: 'two' };

const { oneProp, twoProp  } = obj;

const oneProp = obj.oneProp
const twoProp = obj.twoProp

const arr = ['a', 'b', 'c'];

const [x, y, z] = arr;
const x = arr[0]; 
const y = arr[1]; 
const z = arr[2]; 

*/
