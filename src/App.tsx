import { useState } from "react";

function App() {
  const [game, setGame] = useState({ id: 1, player: { name: "harshith" } });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "gowda" } });
  };
}

export default App;
