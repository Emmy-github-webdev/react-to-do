/* eslint-disable */

import React, {useState} from "react";

const InputTodo = (props) => {
  const [title, setTitle] = useState("");

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(title.trim()){
      props.addTodoProps(title);
      setTitle("");
    }else {
      alert("Please write item!");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name = "title"
        onChange={handleChange}
      />
      <button className="input-submit">Submit</button>
    </form>
  );
};

export default InputTodo;
