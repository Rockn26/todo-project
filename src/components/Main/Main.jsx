import React from 'react'
import './Main.style.css'

const Main = () => {
  return (
    <div className='main-container'>
      <input type="text" placeholder='What needs to be done' />
       items will be displayed here 
      <div className='items-info'>
        <span> items left </span>
        <div className='filter-buttons'>
          <button>all</button>
          <button>active</button>
          <button>completed</button>
          </div>
        <button>clear completed</button>
      </div>
      

    </div>
  )
}

export default Main
