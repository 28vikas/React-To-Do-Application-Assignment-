import React from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const TodoApp = () => {
  return (
    <div className="px-5">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-[150px]">
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
};

export default TodoApp;
