import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

function Delete({ isOpen, todo, del, setIs }) {
  const modal = document.getElementById('portal');
  const dispatch = useDispatch();

  if (!modal || !isOpen) return null;

  const removeTodo = () => {
    dispatch(del(todo.id));
    setIs(false);
  };

  return createPortal(
    <div
      onClick={() => setIs(false)}
      className='fixed inset-0 z-50  bg-opacity-50 flex items-center justify-center'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full flex flex-col gap-6'
      >
        <p className='text-center font-semibold text-lg'>
          Are you sure you want to
          <span className='text-red-500 font-bold'>delete</span> this todo?
        </p>

        <div className='flex justify-end gap-4'>
          <button
            onClick={() => setIs(false)}
            className='hover:rounded-full hover:bg-green-500 px-4 py-2 border border-black rounded  hover:text-white transition-all duration-200'
          >
            Cancel
          </button>
          <button
            onClick={removeTodo}
            className='hover:rounded-full px-4 py-2 border border-black rounded hover:bg-red-500 hover:text-white transition-all duration-200'
          >
            Delete
          </button>
        </div>
      </div>
    </div>,
    modal
  );
}

export default Delete;
