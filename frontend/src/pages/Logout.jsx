import React, { useEffect } from 'react'
import AuthStore from '../../stores/authStore'

export default function Logout() {

    const store=AuthStore();

    useEffect(()=>{
        store.logout();

    },[])
  return (
    <div>
        <h1>logout</h1>
      
    </div>
  )
}
