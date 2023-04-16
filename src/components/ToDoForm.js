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
      <input className="py-1 px-6 rounded-md border-2 border-pink-400" type="text" placeholder="What is the task today?" value={value} onChange={(e) =>setValue(e.target.value)}/>
      <button type="submit" className="mt-4 lg:mt-0 mx-5 rounded-md text-white bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 px-6 py-1 from-pink-500  to-yellow-400 transition-colors duration-75">Add Task</button>
      </form>
    </div>
  );
};
