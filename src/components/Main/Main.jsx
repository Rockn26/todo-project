import React, { useEffect, useState } from "react";
import "./Main.style.css";
import Item from "../Item/Item";

const Main = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filterState, setFilterState] = useState("all");

  useEffect(() => {
    if (filterState === "all") {
      setFilteredItems(items);
    } else if (filterState === "active") {
      setFilteredItems(items.filter((item) => !item.isCompleted));
    } else if (filterState === "completed") {
      setFilteredItems(items.filter((item) => item.isCompleted));
    }
  }, [items, filterState]);

  const handleUserInput = (e) => {
    const object = {
      task: e.target.value,
      isCompleted: false,
      isRemoved: false,
    };
    setItems((prevItems) => [...prevItems, object]);
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
        {filteredItems.map((item) => {
          return (
            <Item
              key={item.task}
              item={item}
              items={items}
              setItems={setItems}
            />
          );
        })}
      </div>
      <div className="items-info">
        <span> {items.filter(obj=>!obj.isCompleted).length} items left </span>
        <div className="filter-buttons">
          <button onClick={() => setFilterState("all")}>all</button>
          <button onClick={() => setFilterState("active")}>active</button>
          <button onClick={()=> setFilterState("completed")}>completed</button>
        </div>
        <button onClick={() => setItems(obj=> items.filter(obj=> !obj.isCompleted))}>clear completed</button>
      </div>
    </div>
  );
};

export default Main;
