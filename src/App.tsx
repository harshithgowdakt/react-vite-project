import "./App.css";
import Like from "./components/Like";

function App() {
  const cities = ["banglore", "mumbai", "chennai"];
  return <Like onClick={() => console.log("clicked")}></Like>;
}

export default App;
