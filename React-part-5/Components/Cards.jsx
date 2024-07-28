import React from 'react';
import Card from './Card';

function Cards({users, handleRemove}) {
  return (
    <div className='w-full h-96 h-max-96 overflow-auto flex justify-center items-center flex-wrap gap-10 p-4'>
      {users.map((item, index)=>{
        return <Card handleRemove={handleRemove} id={index} key={index} user={item}/>
      })}
      
    </div>
  )
}

export default Cards
