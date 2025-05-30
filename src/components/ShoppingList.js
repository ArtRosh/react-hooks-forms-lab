import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import itemData from "../data/items";

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [filterInput, setFilterInput] = useState("")

  const [items, setItems] = useState(itemData)


  function handleSubmit (newItem) {
    setItems([...items, newItem])

 
  }


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleInputChange(event) {
    setFilterInput(event.target.value)
  }

  

const itemsToDisplay = items.filter(item => {
  const matchCategory = selectedCategory === "All" || item.category === selectedCategory
  const matchName = item.name.toLowerCase().includes(filterInput.toLowerCase())
  return matchCategory && matchName
})


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit}/>
                
      <Filter onCategoryChange={handleCategoryChange} 
              onSearchChange={handleInputChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
