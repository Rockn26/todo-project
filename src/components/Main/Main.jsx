import React, { useEffect, useState } from "react";
import "./Main.style.css";
import Item from "../Item/Item";


const Main = () => {
  const [items, setItems] = useState([]);

  const handleUserInput = (e) => {
    const object = {
      task: e.target.value,
      isCompleted: false,
      isRemoved: false,
    };
    setItems(prevItems => [...prevItems, object]);
    e.target.value = "";
  };

  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.key === "Enter") {
        e.preventDefault(); 
        handleUserInput(e);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  

  return (
    <div className="main-container">
      <input type="text" placeholder="What needs to be done" />
      <div className="items">
          {items.map((item) => {
            return (
              <Item key={item.task} item={item} items={items} setItems={setItems} />
            );
          })}
      </div>
      <div className="items-info">
        <span> items left </span>
        <div className="filter-buttons">
          <button>all</button>
          <button>active</button>
          <button>completed</button>
        </div>
        <button>clear completed</button>
      </div>
    </div>
  );
};

export default Main;
