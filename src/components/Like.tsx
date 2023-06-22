import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

export const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status)
    return (
      <AiFillHeart color="#ff6b81" size={20} onClick={toggle}></AiFillHeart>
    );

  return <AiOutlineHeart onClick={toggle}></AiOutlineHeart>;
};

export default Like;
