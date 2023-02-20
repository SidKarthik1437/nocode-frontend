import React, { memo, useRef, useState } from "react";
import axios from "axios";
import { Handle } from 'reactflow';
// import {} from "../../../curlbackend"

export default memo(({ data, isConnectable, name, id }) => {
  return (
    <div className="bg-blue-500 p-2 rounded text-white tracking-wider">
      <div className="text-center">{data.value.name}</div>
      <Handle
        type="source"
        position="right"
        style={{
          background: "white",
          width: 10,
          height: 10,
          //   borderColor: "orange",
          borderRadius: "5px 0px 5px 5px",
          transform: "rotate(45deg)",
          top: 16,
        }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <div>
        
      </div>
    </div>
  );
});
