import React from 'react'
import { useState } from 'react'
import {useRouter } from 'next/router'



export default function Form() {

  const router =useRouter()

    const [name, setName] = useState('Patch')
    const [title, setTitle] = useState('')

    // handleSubmit for the form
    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    const response = fetch('./db.json',{
      method: `POST`,
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({title})
    })

    if(response.status === 201){
      Router.push('/home')
    }
  return (
    <div>
        {name}

        {/* add onSubmit on the form */}
        {/* Create a form for the title */}

    <form onSubmit={ () => handleSubmit() }>

        <label>
        <span>Title</span>
        <input
        required
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        ></input>
        </label>
        
        <button onClick={ ()=> setName('Nathan')}>Press aqui</button>
    </form>
    </div>
    
  )
}