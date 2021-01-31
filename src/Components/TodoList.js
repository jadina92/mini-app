import { v4 as uuidv4 } from "uuid";

import { useEffect, useState } from "react";

const Todolist = (props) => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]); // {key: dbhjbj, name: chaussette}

  const handleOnChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    if (input === "") return;
    const todo = { key: uuidv4(), name: input };
    setTodos([...todos, todo]);
    localStorage.setItem(todo.key, todo.name);
    setInput("");
  };

  const deleteTodo = (event, key) => {
    event.preventDefault();
    const array = todos.filter((todo) => key !== todo.key);
    setTodos(array);
    localStorage.removeItem(key);
  };

  useEffect(() => {
    const values = [];
    const keys = Object.keys(localStorage);
    let index = keys.length;
    while (index-- > 0) {
      values.push({
        key: keys[index],
        name: localStorage.getItem(keys[index]),
      });
    }
    setTodos(values);
  }, []);

  return (
    <>
      <div>
        <h1 align="center"> Todo trucs</h1>
        <form className="align-items-center">
          <input
            value={input}
            type="text"
            className="form-control mb-2"
            placeholder="ajouter item"
            onChange={handleOnChange} // (event) => {...}
          />
          <button className="btn btn-primary" onClick={addTodo}>
            Ajouter tache
          </button>
          {todos.map((todo) => {
            return (
              <div className="list-group-item mt-3" key={todo.key}>
                {todo.name}
                <button
                  onClick={(event) => deleteTodo(event, todo.key)}
                  className="btn btn-danger ml-5"
                >
                  Supprimer
                </button>
              </div>
            );
          })}
        </form>
      </div>
    </>
  );
};

export default Todolist;

/*//////////////////////TODOLIST SANS LOCAL STORAGE////////////////////////////////////////////
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
const Todolist = (props) => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]); // {key: dbhjbj, name: chaussette}
  const handleOnChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };
  const addTodo = (event) => {
    event.preventDefault();
    if (input === "") return;
    const todo = { key: uuidv4(), name: input };
    setTodos([...todos, todo]);
    localStorage.setItem(todo.key, todo.name);
    setInput("");
  };
  const deleteTodo = (event, key) => {
    event.preventDefault();
    const array = todos.filter((todo) => key !== todo.key);
    setTodos(array);
  };
  return (
    <>
      <div>
        <h1 align="center"> Todo trucs</h1>
        <form className="align-items-center">
          <input
            value={input}
            type="text"
            className="form-control mb-2"
            placeholder="ajouter item"
            onChange={handleOnChange} // (event) => {...}
          />
          <button className="btn btn-primary" onClick={addTodo}>
            Ajouter tache
          </button>
          {todos.map((todo) => {
            return (
              <div className="list-group-item mt-3" key={todo.key}>
                {todo.name}
                <button
                  onClick={(event) => deleteTodo(event, todo.key)}
                  className="btn btn-danger ml-5"
                >
                  Supprimer
                </button>
              </div>
            );
          })}
        </form>
      </div>
    </>
  );
};
export default Todolist;

/*//////////////////////// ma facon todolist///////////////////
/////////////////////////////////
/*
 import React from "react";
import {useState} from 'react';
function FormInput({ addTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button >ajouter</button>
    </form>
  );
}
function Todo({ todo, index,removeItem }) {
    return (
      <div>
        {todo.text}
          <button onClick={() =>removeItem(index)}>Remove</button>
      </div>
    );
  }
function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const removeItem = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
      <div >
           <FormInput addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
           removeItem={removeItem}
          />
        ))}
      </div>
  );
}
export default TodoList;
 */