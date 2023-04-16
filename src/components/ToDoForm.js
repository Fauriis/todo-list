import React, { useState } from "react";


export const ToDoForm = ({addTodo}) => {
const [value, setValue] = useState('')

const handleSubmit = e =>{
    e.preventDefault();


    addTodo(value);

    setValue("")
}


  return (
    <div className="">
        <form className="" onSubmit={handleSubmit}>
      <input type="text" placeholder="What is the task today?" value={value} onChange={(e) =>setValue(e.target.value)}/>
      <button type="submit">Add Task</button>
      </form>
    </div>
  );
};
