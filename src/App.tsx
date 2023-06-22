import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [drink, setDrink] = useState({
    title: "KF",
    price: 5,
  });

  const handleClick = () => {
    setDrink({ ...drink, price: 6 });
  };
  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
