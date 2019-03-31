import React, { Component, useState } from "react";
import "./App.css";

import TodoList from "./components/TodoList"

const todosData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

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
  const todoInput = useInput();
  const [todos, setTodos] = useState(todosData)

  // const updateTitle = e => {
  //   e.preventDefault();
  //   setTitle(titleInput.value);
  //   titleInput.setValue("");
  // };

  const addTodo = event => {
    event.preventDefault();
    const newTodo = {
      task: todoInput.value,
      id: Date.now(),
      completed: false
    }
    setTodos([...todos, newTodo ])
    todoInput.setValue("")
  }

  return (
    <div className="App">
      <h1>{title}</h1>
      <TodoList todos={todos} />
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={todoInput.value}
          onChange={todoInput.updateValue}
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
