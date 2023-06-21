import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  const cities = ["Mumbai", "Bangalore", "chennai"];
  const handleSelectedItem = (item: string) => console.log(item);
  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
