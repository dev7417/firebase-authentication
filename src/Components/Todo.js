import React from 'react'
import './todo.css'
export default function Todo() {
  return (
    <div className='main-container'>
      <div className='input'>
        <input type='text' placeholder="Add todos"/>
      </div>
      <button className='btn btn-primary my-5 mx-auto d-flex'>Add todo</button>
    </div>
  )
}
