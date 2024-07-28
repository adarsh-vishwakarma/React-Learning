import React from 'react'

function Navbar({data}) {

  return (
    <div className='w-full h-16 flex items-center justify-between px-20'>
        <h1 className='text-2xl font-semibold text-orange-500'>Orange</h1>
        <div className='flex justify-center item-center gap-4 bg-orange-500 px-3 py-2 rounded-md text-white text-sm'>
            <h2>Favourite</h2>
            <h3>{data.filter((item, index)=>item.added).length}</h3>
        </div>
    </div>
  )
}

export default Navbar
