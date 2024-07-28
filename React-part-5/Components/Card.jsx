import React from 'react';

function Card({user, handleRemove, id}) {
  return (
    <div className='w-56 h-fit rounded-md p-4 bg-zinc-100 flex flex-col items-center'>
      <div className='h-16 w-16 rounded-full bg-red-100 overflow-hidden'>
        <img className='h-full w-full object-fit' src={user.image} />
      </div>
      <h1 className='text-xl font-semibold'>{user.name}</h1>
      <h4 className='text-sm font-semibold opacity-40'>{user.email}</h4>
      <p className='text-center text-sm'> It is a set of signs that is available to be reconstructed by a reader if sufficient interpretants are available</p>
      <button onClick={() => handleRemove(id)} className='mt-4 py-1 px-2 bg-red-600 rounded-md text-white'>Remove it</button>
    </div>
  )
}

export default Card;