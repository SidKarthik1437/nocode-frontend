import React, { memo } from "react";

import { Handle } from 'reactflow';

export default memo(({ data, isConnectable }) => {

  return (
    <div className="bg-yellow-500 p-2 rounded text-white tracking-wider">
      <div className="">Start</div>
      <Handle
        type="source"
        position="right"
        style={{
          background: "white",
          width: 10,
          height: 10,
        //   borderColor: "orange",
          borderRadius: '5px 0px 5px 5px',
          transform: "rotate(45deg)",
          top: 16,
        }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
    </div>
  );
});
