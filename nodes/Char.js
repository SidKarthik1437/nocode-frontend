import React, { memo, useState } from "react";

import { Handle } from "reactflow";

export default memo(({ data, isConnectable }) => {
  const [char, setChar] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setChar(event.target.value);
    data.value = event.target.value;
    data.type = "value";
  };

  return (
    <div
      className="bg-blue-500 p-2 h-20 rounded text-white tracking-wider"
      style={{
        width: "100px",
      }}
    >
      <Handle
        type="target"
        position="left"
        style={{
          background: "transparent",
          width: 10,
          height: 10,
          //   borderColor: "orange",
          borderRadius: "5px 0px 5px 5px",
          transform: "rotate(45deg)",
          top: 15,
        }}
        onConnect={(event) => console.log("handle onConnect", event)}
        isConnectable={isConnectable}
      />
      <div className="flex justify-center" style={{ width: "100%" }}>
        <span>Char</span>
      </div>
      <input
        className="text-black px-2 rounded text-center"
        style={{
          color: "black",
          width: "100%",
        }}
        type="text"
        onChange={handleChange}
        value={char}
      />
      <Handle
        type="source"
        position="right"
        id="a"
        style={{
          background: "transparent",
          width: 10,
          height: 10,
          //   borderColor: "orange",
          borderRadius: "5px 5px 5px 0px",
          transform: "rotate(45deg)",
          top: 15,
        }}
        onConnect={(event) => console.log("handle onConnect", event)}
        isConnectable={isConnectable}
      />
    </div>
  );
});
