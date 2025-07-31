import React from 'react'
import TodoInput from './components/TodoInput'
import TodosList from './components/TodosList'

function App() {
  return (
    <div className='bg-gradient-to-r from-purple-400 to-white h-screen' >
      <TodoInput></TodoInput>
      <TodosList/>
    </div>
  )
}

export default App
