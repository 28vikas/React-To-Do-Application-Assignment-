import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editTodo,
  removeAll,
  removeTodo,
  toggleComplete,
} from "../Redux/todoSlice/todoSlice";
import { MdDelete, MdEditSquare, MdSave } from "react-icons/md";

const TaskList = () => {
  const [editableTaskId, setEditableTaskId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState("");

  const listTodo = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  // remove all Functionality

  const handleRemoveAll = () => {
    dispatch(removeAll());
  };

  // edit Functionality

  const handleEdit = (taskId, taskText) => {
    setEditableTaskId(taskId);
    setEditedTaskText(taskText);
  };

  const handleSaveEdit = (taskId) => {
    dispatch(editTodo({ id: taskId, text: editedTaskText }));
    setEditableTaskId(null);
  };

  const handleChange = (e) => {
    setEditedTaskText(e.target.value);
  };

  return (
    <div className="py-4">
      <ul className="divide-y divide-gray-200 px-4">
        {listTodo.map((item) => (
          <div key={item.id}>
            <li
              className={`py-4 flex justify-between items-center ${
                item.completed ? "line-through" : ""
              }`}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={item.completed}
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  onChange={() => dispatch(toggleComplete(item.id))}
                />
                {editableTaskId === item.id ? (
                  <input
                    type="text"
                    value={editedTaskText}
                    onChange={handleChange}
                    onBlur={() => handleSaveEdit(item.id)}
                    autoFocus
                    className="ml-3 px-2 border-b-2 border-gray-500 focus:outline-none"
                  />
                ) : (
                  <label className="ml-3 block text-gray-900">
                    <span className="text-lg font-medium">{item.text}</span>
                  </label>
                )}
              </div>
              <div>
                {editableTaskId === item.id ? (
                  <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => handleSaveEdit(item.id)}
                  >
                    <MdSave />
                  </button>
                ) : (
                  <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded mr-2"
                    onClick={() => handleEdit(item.id, item.text)}
                  >
                    <MdEditSquare />
                  </button>
                )}

                <button
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded"
                  onClick={() => dispatch(removeTodo(item.id))}
                >
                  <MdDelete />
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>

      {listTodo.length > 0 && (
        <div className=" flex justify-center items-center mt-4">
          <button
            className="bg-transparent hover:bg-blue-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded"
            onClick={handleRemoveAll}
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskList;
