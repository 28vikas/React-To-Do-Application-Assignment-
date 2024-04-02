import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/todoSlice/todoSlice";
import toast from "react-hot-toast";

const TaskInput = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const addTodoHandle = (e) => {
    e.preventDefault();

    const trimmedInput = input.trim();

    if (trimmedInput !== "") {
      dispatch(addTodo(trimmedInput));
      setInput("");
    } else {
      toast.error("Please enter a non-empty task!");
    }
  };

  return (
    <div>
      <div className="px-4 py-2">
        <h1 className="text-gray-800 font-bold text-2xl uppercase">
          To-Do List
        </h1>
      </div>
      <div className="w-full max-w-sm mx-auto px-4 py-2">
        <form className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Add a task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
            onClick={addTodoHandle}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskInput;
