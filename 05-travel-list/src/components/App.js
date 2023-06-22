import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handlerDeleteItem(id) {
    setItems((items) => items.filter((a) => a.id !== id));
  }

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleCheckItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteAll() {
    const c = window.confirm("Are you sure ?");
    if (c === true) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList
        items={items}
        onDeleteItem={handlerDeleteItem}
        onUpdateItem={handleCheckItems}
        onDeleteList={handleDeleteAll}
      />
      <Stats items={items} />
    </div>
  );
}

// if we need to catch the value of select element to that use event.target.value
