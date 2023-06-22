import { useState } from "react";

interface Props {
  children: string;
  maxChars: number;
}

const ExpandableText = ({ children, maxChars }: Props) => {
  const [exapned, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = exapned ? children : children.substring(0, maxChars);

  return (
    <div>
      {text} ...
      <button onClick={() => setExpanded(!exapned)}>
        {exapned ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;
