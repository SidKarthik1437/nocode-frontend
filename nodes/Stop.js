import React, { memo } from "react";

import { Handle } from 'reactflow';

export default memo(({ data, isConnectable }) => {
  return (
    <div className="bg-red-400 p-2 rounded text-white tracking-wide">
      <div className="">Stop</div>
      <Handle
        type="target"
        position="left"
        style={{
          background: "white",
          width: 10,
          height: 10,
          //   borderColor: "orange",
          borderRadius: "5px 5px 5px 0px",
          transform: "rotate(45deg)",
          top: 16,
        }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
    </div>
  );
});
