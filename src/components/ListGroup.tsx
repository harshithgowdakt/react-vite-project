import { MouseEvent } from "react";

function ListGroup() {
  const items = [
    "New Delhi",
    "Mumbai",
    "Bengaluru",
    "Chennai",
    "Pune",
    "Hydarabad",
  ];

  const handleClick = (event: MouseEvent) =>
    console.log("Event: ", event.detail);
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li key={item} className="list-group-item" onClick={handleClick}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
