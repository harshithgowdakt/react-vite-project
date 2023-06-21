import "./App.css";
import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  const cities = ["banglore", "mumbai", "chennai"];
  return (
    <ListGroup
      items={cities}
      onSelectedItem={() => console.log("clicked")}
      heading="Cities"
    ></ListGroup>
  );
}

export default App;
