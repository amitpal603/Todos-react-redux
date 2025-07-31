import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removetodo, updataTodo } from '../Features/todo/todoSlice';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { LuSaveAll } from "react-icons/lu";

function TodosList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

    const [EditId ,setEditId] = useState(null)
    const [EditTaskId, setTaskId] = useState('')

    const HandleEdit = (todo) => {
        setEditId(todo.id)
        setTaskId(todo.task)
    }

    const HandleSave = (id) => {
      dispatch(updataTodo({id,task: EditTaskId}))
      setEditId(null)
      setTaskId('')
    } 
 

  return (
    <div className='mx-auto max-w-xl '>
      <div className='flex justify-center gap-20 flex-col mt-12'>
        <h1 className='text-center text-3xl font-bold'>Your Todos List..</h1>
        <ul className='space-y-4'>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className='shadow-lg px-4 py-3 flex justify-between bg-gradient-to-r from-white-500 to-purple-600 text-white rounded-md transition duration-75'
            >
                
             <div className='flex gap-4'>
              <input type="checkbox" name="" id="" />
               {EditId === todo.id ? (
                <input 
                value={EditTaskId}
                onChange={(e) => setTaskId(e.target.value)}
                type="text" placeholder={todo.task} />
               ) : (
                <span className=' text-lg'>{todo.task}</span>
              )}
             </div>

              <div className='flex gap-7'>
                    {EditId === todo.id ? (
                      <button 
                      className='text-2xl'
                      onClick={() => HandleSave(todo.id)}><LuSaveAll/></button>
                    ) : (
                      <button 
                      className='text-2xl'
                      onClick={() => HandleEdit(todo)}><CiEdit/></button>
                    )}
                <button
                  onClick={() => dispatch(removetodo(todo.id))}
                  className='text-red-500 text-3xl hover:cursor-pointer'
                >
                  <RiDeleteBin6Fill />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodosList;
