import React, { memo, useState } from "react";

import { Handle } from 'reactflow';

export default memo(({ data, isConnectable }) => {
  const [num, setnum] = useState(0);

  return (
    <div className="bg-blue-500 p-2 w-20 h-20 rounded text-white tracking-wider">
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
      <div className="text-center">Char</div>
      <input
        className="w-10 text-black pt-2 rounded text-center"
        type="text"
        onChange={(event) => setnum(event.target.value)}
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
