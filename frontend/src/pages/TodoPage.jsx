import React, { useEffect } from 'react'
import TodoStore from '../../stores/TodoStore';
import CreateForm from '../components/CreateForm';
import UpdateForm from '../components/UpdateForm';
import ToDos from '../components/ToDos';
export default function TodoPage() {
    const stores = TodoStore();

  useEffect(()=>{
    stores.fetchTodos();
  },[])
  return (
    <>
<CreateForm/>
<UpdateForm/>
<ToDos/>
</>
  )
}
