import React from 'react';
import { useForm } from 'react-hook-form';

function Form({handleFormSubmitData}) {
  const {register, handleSubmit, reset} = useForm();
  const handleFormSubmit = (data)=> {
    handleFormSubmitData(data);
    reset();
  }
  return (
    <div className='flex justify-center mt-5 gap-4'>
      <form className='flex gap-10' onSubmit={handleSubmit(handleFormSubmit)}>
      <input {...register('name')} className='py-2 px-1 rounded-md outline-none' type='text' placeholder='name'/>
      <input {...register('email')} className='py-2 px-1 rounded-md outline-none' type='text' placeholder='email'/>
      <input {...register('image')} className='py-2 px-1 rounded-md outline-none' type='teext' placeholder='image url..' />
      <input className='py-1 px-4 font-semibold bg-red-600 text-white text-sm rounded-md' type='submit'/>
      </form>
    </div>
  )
}

export default Form;