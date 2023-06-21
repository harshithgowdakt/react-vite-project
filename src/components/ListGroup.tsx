import { useState } from "react";

function ListGroup() {
  const items = [
    "New Delhi",
    "Mumbai",
    "Bengaluru",
    "Chennai",
    "Pune",
    "Hydarabad",
  ];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li
          key={item}
          className={
            selectedIndex === index
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => setSelectedIndex(index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
