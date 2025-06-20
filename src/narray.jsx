function ItemList() {
    const items = ["Apple", "Banana", "Orange"];
  
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  
  export default ItemList;