import React, { useState } from "react";


export const EditToDoForm = ({editTodo, task}) => {
const [value, setValue] = useState(task.task)

const handleSubmit = e =>{
    e.preventDefault();


    editTodo(value, task.id);

    setValue("")
}


  return (
    <div className="">
        <form className="" onSubmit={handleSubmit}>
      <input  className="py-1 mt-6 px-6 rounded-md border-2 border-pink-400" type="text" placeholder="Update task" value={value} onChange={(e) =>setValue(e.target.value)}/>
      <button className="mx-5 rounded-md text-white bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 px-6 py-1 from-pink-500  to-yellow-400 transition-colors duration-75" type="submit">Update task</button>
      </form>
    </div>
  );
};
