import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="flex flex-row gap-3 mt-6 items-center justify-center bg-pink-200 shadow-lg w-1/3 lg:ml-96 ml-32">
      
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${
          task.completed ? "line-through cursor-pointer" : "cursor-pointer"
        }`}
      >
        {task.task} 
      </p>

      <CiEdit
        size={20}
        title='Edit'
        className="cursor-pointer"
        onClick={() => editTodo(task.id)}
      ></CiEdit>
      <MdDelete
        size={20}
        title="Delete"
        className="cursor-pointer"
        onClick={() => deleteTodo(task.id)}
      ></MdDelete>
    </div>
  );
};
