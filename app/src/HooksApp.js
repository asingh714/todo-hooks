import React from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import { useInput } from "./hooks/useInput";
import { useTodoList } from "./hooks/useTodoList";


const todosData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

export default function HooksApp() {
  const todoInput = useInput();
  const todoList = useTodoList(todosData, todoInput);
 
  return (
    <div className="App">
      <h1>Todos are so fun 🤪</h1>
      <TodoList
        todos={todoList.todos}
        handleToggleComplete={todoList.toggleTodo}
      />
      <form onSubmit={todoList.addTodo}>
        <input
          type="text"
          value={todoInput.value}
          onChange={todoInput.updateValue}
        />
        <button>Set Title</button>
      </form>
    </div>
  );
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
