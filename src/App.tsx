import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert> Hello, world</Alert>
      <Button color="primary" onClick={() => console.log("Clicked")}>
        Submit
      </Button>
    </div>
  );
}

export default App;
