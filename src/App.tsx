import { useState } from "react";

function App() {
  const [game, setGame] = useState({ id: 1, player: { name: "harshith" } });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quatity: 1 },
      { id: 2, title: "Product 2", quatity: 1 },
    ],
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "gowda" } });
    setPizza({ ...pizza, toppings: [...pizza.toppings, "cheese"] });
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quatity: item.quatity + 1 } : item
      ),
    });
  };
}

export default App;
