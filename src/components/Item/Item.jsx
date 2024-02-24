import React from 'react'
import './Item.style.css'


const Item = ({item, items, setItems}) => {
    const index = items.indexOf(item);
    const handleClick = () => {
       let newItems = [...items];
         newItems[index].isCompleted = !newItems[index].isCompleted;
            setItems(newItems);

    }
 
  return (
    <div className='main-item'>
      <button onClick={handleClick} className={`item-button ${item.isCompleted ? 'green-button' : 'grey-button'}`}></button>
      <div className='item-value'>
        {item.task}
      </div>
    </div>
  )
}

export default Item
