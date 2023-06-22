import { useState } from "react";
import { produce } from "immer";

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

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "gowda" } });
    setPizza({ ...pizza, toppings: [...pizza.toppings, "cheese"] });
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quatity: item.quatity + 1 } : item
      ),
    });

    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
    setTags([...tags, "exciting"]);
    setTags(tags.filter((tag) => tag !== "happy"));
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };
  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
