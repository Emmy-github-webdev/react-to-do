/* eslint-disable */

import React, {useState, useEffect} from "react";
import TodosList from "./TodosList";
import Head from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  
  const handleChange = d => {
    setTodos(prevState => 
      prevState.map(todo => {
        if (todo.id === id){
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      })
    )
  };

  const delTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  };

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    setTodos([
      ...todos, newTodo
    ]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if(todo.id === id){
          todo.title = updatedTitle
        }
        return todo
      }),
    )
  };

  useEffect(() => {
    console.log("Test run");
  })
  return (
    <div className="container">
      <div className="inner">
        <Head />
        <InputTodo addTodoProps={addTodoItem} />
        <TodosList 
        todos={todos} 
        handleChangeProps={handleChange} 
        deleteTodoProps={delTodo}
        setUpdate={setUpdate}
        />
      </div>
    </div>
  )
};

export default TodoContainer;
