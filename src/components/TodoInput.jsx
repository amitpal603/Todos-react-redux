import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../Features/todo/todoSlice'


function TodoInput() {
    const [input,setInput] = useState('')

    const dispatch = useDispatch()

    const Handle = (e) => {
       e.preventDefault()
       dispatch(addTodo(input))
       setInput('')
    }
  return (
    <div className=' flex justify-center '>
     <div
     className='flex gap-9 mt-10 h-25 w-150 shadow-lg p-4 shadow-purple-400 rounded-md'>
         <input 
         value={input}
         onChange={(E) => setInput(E.target.value)}
      className=' placeholder:font-bold  h-12 w-140 pl-4 rounded-md border-2 border-black focus:outline-2 focus:outline-purple-400 focus:ring-2'
      type="text" placeholder='Add Task..' />

      <button 
      onClick={Handle}
      className=' hover:scale-95 hover:bg-purple-500 hover:text-white h-12 w-40 bg-purple-400 rounded-md font-bold hover:cursor-pointer'>Add Todos</button>
     </div>
    </div>
  )
}

export default TodoInput
