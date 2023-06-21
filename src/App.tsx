import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlerntVisibilty] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlerntVisibilty(false)}> My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlerntVisibilty(true)}>
        Submit
      </Button>
    </div>
  );
}

export default App;
