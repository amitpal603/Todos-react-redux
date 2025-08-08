import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removetodo, updataTodo, complete } from "../Features/todo/todoSlice";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { LuSaveAll } from "react-icons/lu";
import { GiCheckMark } from "react-icons/gi";
import Delete from "../ExtraFeature/Delete";

function TodosList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [EditId, setEditId] = useState(null);
  const [EditTaskId, setTaskId] = useState("");
  const [select, setSelect] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  console.log(select);

  const HandleEdit = (todo) => {
    setEditId(todo.id);
    setTaskId(todo.task);
  };

  const HandleDelete = (todo) => {
    setSelect(todo);
    setIsOpen(true);
  };

  const HandleSave = (id) => {
    dispatch(updataTodo({ id, task: EditTaskId }));
    setEditId(null);
    setTaskId("");
  };
  const HandleCheck = (todo) => {
    dispatch(complete({ id: todo.id }));
  };

  return (
    <div className=" mx-auto max-w-xl">
      <div className="flex justify-center gap-20 flex-col mt-12">
        <h1 className="text-center text-3xl font-bold">Your Todos List..</h1>
        <ul className=" space-y-4">
          {todos && todos.length === 0 ? (
            <p className="text-rose-500 font-bold text-center">Added todos yet.!</p>
          ): (
            todos.map((todo) => (
            <li
              key={todo.id}
              className="shadow-lg px-4 py-3 flex justify-between bg-gradient-to-r from-white-500 to-purple-600 text-white rounded-md transition duration-75"
            >
              <div className="flex gap-4 justify-center items-center">
                <button
                onClick={() => HandleCheck(todo)}
                className={`h-4 w-4 rounded-full  border-2 border-black flex items-center justify-center ${
                todo.completed ? "bg-green-400" : ""
                }`}
                >
                  {todo.completed && <GiCheckMark />}
                </button>
                {EditId === todo.id ? (
                  <input
                    value={EditTaskId}
                    onChange={(e) => setTaskId(e.target.value)}
                    type="text"
                    placeholder={todo.task}
                  />
                ) : (
                  <span className="text-lg">{todo.task}</span>
                )}
              </div>

              <div className="flex gap-7">
                {EditId === todo.id ? (
                  <button
                    className="text-2xl"
                    onClick={() => HandleSave(todo.id)}
                  >
                    <LuSaveAll />
                  </button>
                ) : (
                  <button className="text-2xl" onClick={() => HandleEdit(todo)}>
                    <CiEdit />
                  </button>
                )}
                <button
                  onClick={() => HandleDelete(todo)}
                  className="text-red-500 text-3xl hover:cursor-pointer"
                >
                  <RiDeleteBin6Fill />
                </button>
              </div>
            </li>
          )))}
        </ul>
      </div>
      <Delete
        isOpen={isOpen}
        setIs={setIsOpen}
        todo={select}
        del={removetodo}
        />
    </div>
  );
}

export default TodosList;
