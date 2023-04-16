import React, { useState } from "react";
import { ToDoForm } from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
uuidv4();

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  return (
    <div className="text-center">
        <h1 className="mt-6">Get things done!</h1>
      <ToDoForm addTodo={addTodo}></ToDoForm>
      {todos.map((todo, index) => (
        <Todo task={todo} key={index}></Todo>
      ))}
    </div>
  );
};
