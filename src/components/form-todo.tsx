"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { createTodo } from '@/service/mutation/create-todo'
import { Button } from './ui/button';

interface dataType {
    title: string;
    description: string;
    id: number
}

export const FormTodo = () => {
    const {handleSubmit, register, reset} = useForm<dataType>()
    const [ loading, setTrasion] = React.useTransition()

    const submit = (data:dataType) =>{
        setTrasion(()=>{
        createTodo(data)
       })
       reset()
        
    }
  return (
    <div>
        <form className='flex flex-col items-center justify-center animate-wiggle w-[500px] h-[300px] shadow-lg shadow-gray-300 border-2 gap-5 ' onSubmit={handleSubmit(submit)}>
        <h1 className='font-medium text-2xl'>Todo List</h1>
            <input className='w-[300px] h-[50px] outline-gray-500 border-2 border-gray-400 rounded-lg mb-2' {...register("title")} type="text" required />
            <input className='w-[300px] h-[50px] outline-gray-500 border-2 border-gray-400 rounded-lg' {...register("description")} type="text" required />
            <Button type='submit' className='bg-gray-400 w-[300px] h-[50px]  hover:shadow-lg hover:shadow-gray-400 hover:bg-transparent hover:border-2 hover:border-gray-400 hover:text-gray-500 rounded-xl font-medium text-lg'> {loading ? 'loading..' : 'send'}</Button>
        </form>
  
      

    </div>
  )
}
