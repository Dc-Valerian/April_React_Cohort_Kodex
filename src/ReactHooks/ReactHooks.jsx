import React, { useState } from "react";

const ReactHooks = () => {
  // const [state, setState] = useState(initialValue);..... this is the syntax for writing usestate
  // state ......current value
  // setState is the function to update the state
  // initialvalue ... is the starting value of the state

  const [count, setCount] = useState(0);

  const [isOn, setIson] = useState(false);

  const [text, setText] = useState("Hello World");

  const changeText = () => {
    setText("welcome to react");
  };

  const [isLiked, setIsLiked] = useState("false");
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <div className="bg-[cyan] mt-4 py-5">
        <h1>{count}</h1>
        <button
          className="bg-[blue] p-2 mt-4 rounded-2xl"
          onClick={() => setCount(count + 4)}
        >
          Increase
        </button>
        <button
          className="bg-[blue] p-2 mt-4 rounded-2xl"
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </button>
      </div>

      <div className="bg-[beige] mt-4 py-5">
        <h2>{isOn ? "oN" : "OFF"}</h2>
        <button onClick={() => setIson(!isOn)}>Toggle</button>
      </div>

      <div className="bg-[gold] mt-4 py-5">
        <h2>This is the {text}</h2>
        <button onClick={changeText}>Change Text</button>
      </div>

      <div className="bg-[navy]  mt-4 py-5">
        <button className="cursor-pointer" onClick={toggleLike}>
          {isLiked ? "🤍" : "❤️"}
        </button>
        <p>{isLiked ? "Click to Like Post" : "You liked the post"}</p>
      </div>
    </div>
  );
};

export default ReactHooks;
