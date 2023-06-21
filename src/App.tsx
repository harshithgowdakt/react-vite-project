import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const cities = ["Mumbai", "Bangalore", "chennai"];
  return (
    <div>
      <ListGroup items={cities} heading="Cities" />
    </div>
  );
}

export default App;
