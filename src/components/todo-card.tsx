'use client';
import { deleteItem } from '@/service/mutation/delete-todo';
import { editItem } from '@/service/mutation/edit-todo';
import React from 'react';

export type ObjectType = {
    title: string;      
    description: string; 
    id: number;         
};

export const TodoCard: React.FC<ObjectType> = ({ title, description, id }) => {
  const [loading, setTrasion] = React.useTransition();
  

  const deleteTodo = () => {
    setTrasion(() => {
      deleteItem(id);
    });
  };

  const editTodo = () => {
    const newTitle = prompt("Yangi malumot kiriting", title);
    const newDescription = prompt("Yangi malumot kiriting", description);

    if (newTitle && newDescription) {
      setTrasion(() => {
        editItem(id, { title: newTitle, description: newDescription, id });
      });
    }
  };

  return (
    <div className='w-[500px] h-[155px] p-5 gap-3  border-2 flex items-start flex-col mt-5 rounded-xl  bg-slate-100  shadow-md shadow-gray-400'>
      <h1 className='font-medium '>{title}</h1>
      <p>{description}</p>
      <div className='flex items-center gap-5'>
        <button 
          onClick={deleteTodo} 
          className='font-medium w-[120px] h-[50px] animate-slideIn bg-red-600 rounded-xl text-white hover:bg-transparent hover:text-red-600 hover:border-2 hover:border-red-600 hover:shadow-md hover:shadow-red-400'>
          {loading ? "loading..." : "Delete"}
        </button>
        <button 
          onClick={editTodo} 
          className='font-medium w-[120px] h-[50px] animate-slideOut bg-green-600 rounded-xl text-white hover:bg-transparent hover:text-green-600 hover:border-2 hover:border-green-600 hover:shadow-md hover:shadow-green-400'>
          {loading ?  "loading..." : "Edit"}
        </button>
      </div>
    </div>
  );
};
