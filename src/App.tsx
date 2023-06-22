import { useState } from "react";

function App() {
  const [game, setGame] = useState({ id: 1, player: { name: "harshith" } });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "gowda" } });
    setPizza({ ...pizza, toppings: [...pizza.toppings, "cheese"] });
  };
}

export default App;
