function ListGroup() {
const items = [
  "New Delhi",
  "Mumbai",
  "Bengaluru",
  "Chennai",
  "Pune",
  "Hydarabad",
];
return (
  <ul className="list-group">
    {items.map((item) => (
      <li key={item} className="list-group-item">
        {item}
      </li>
    ))}
  </ul>
);
}

export default ListGroup;
