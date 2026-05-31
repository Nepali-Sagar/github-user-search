import { useState, useEffect } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (input === "") return;

    setItems([...items, input]);
    setInput("");
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((_, index) => {
      return index !== id;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addItem}>ToDo</button>
      </div>

      <div className="display-list">
        <ul>
          {items.map((item, index) => (
            <li key={index.id} style={{ display: "flex", gap: "10px" }}>
              <div className="item-value">{item}</div>
              <div className="list-btn">
                <button onClick={() => deleteItem(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
