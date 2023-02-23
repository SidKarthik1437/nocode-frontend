import React, { memo, useState } from "react";

import { Handle } from "reactflow";

export default memo(({ data, isConnectable }) => {
  const [num, setnum] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setnum(event.target.value);
    data.value = event.target.value;
    data.type = "value";
  };

  return (
    <div
      className="flex flex-col bg-blue-500 p-2 h-20 rounded text-white tracking-wider"
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
        <span>Float</span>
      </div>
      <input
        className=" px-2 rounded text-center"
        style={{
          color: "black",
          width: "auto",
        }}
        type="text"
        onChange={handleChange}
        value={num}
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
