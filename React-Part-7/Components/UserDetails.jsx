import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetails() {
    const {name} = useParams();

    const navigate = useNavigate();
    const goBackHandler = ()=>{
        navigate("/user");
        // use code to submit form in database
        // navigate(-1);  ek piche le jayega
        
    }
    
  return (
    <>
    <div className='w-full h-96 relative flex flex-col gap-5 items-center justify-center'>
        <h1 className='text-6xl font-semibold bg-orange-500 text-white rounded-md py-2 px-5 text-center'>{name}</h1>
        <button onClick={goBackHandler} className='px-2 py-1 bg-green-500 text-white text-xl rounded-md'>Go Back</button>
    </div>
    
    </>
  )
}

export default UserDetails