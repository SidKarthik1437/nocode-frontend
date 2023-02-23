import React, { memo, useEffect } from "react";

import { Handle, Position } from "reactflow";

function AddNode({ data, isConnectable }) {
  useEffect(() => {
    data.type = "add";
    console.log(data.type);
  }, [isConnectable]);

  return (
    <div className="bg-green-500 p-2 w-20 h-20 rounded text-white tracking-wider">
      <Handle
        type="target"
        position={Position.Left}
        style={{
          background: "white",
          width: 10,
          height: 10,
          //   borderColor: "orange",
          borderRadius: "5px 0px 5px 5px",
          transform: "rotate(45deg)",
          top: 15,
        }}
        onConnect={(params) => console.log(data)}
        isConnectable={isConnectable}
        id="flow-in"
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{
          background: "white",
          width: 10,
          height: 10,
          //   borderColor: "orange",
          borderRadius: "5px 5px 5px 0px",
          transform: "rotate(45deg)",
          top: 15,
        }}
        onConnect={(params) => console.log(data)}
        isConnectable={isConnectable}
        id="flow-out"
      />
      <div className="text-center">ADD</div>
      <div className="flex justify-between">
        <div className="h-5">
          <Handle
            type="target"
            position={Position.Left}
            style={{
              background: "transparent",
              width: 10,
              height: 10,
              //   borderColor: "orange",
              borderRadius: "5px 0px 5px 5px",
              transform: "rotate(45deg)",
              top: 40,
            }}
            onConnect={(params) => console.log("handle onConnect", params)}
            isConnectable={isConnectable}
            id="a"
          />
          <span className="m-0 p-0 ml-2 text-sm">A</span>
        </div>
        <div className="h-5">
          <Handle
            type="source"
            position={Position.Right}
            style={{
              background: "transparent",
              width: 10,
              height: 10,
              //   borderColor: "orange",
              borderRadius: "5px 5px 5px 0px",
              transform: "rotate(45deg)",
              top: 40,
            }}
            onConnect={(params) => console.log("handle onConnect", params)}
            isConnectable={isConnectable}
            id="sum"
          />
          <span className="m-0 p-0 ml-2 text-sm">sum</span>
        </div>
      </div>
      <div className="h-5">
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
            top: 60,
          }}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
          id="b"
        />
        <span className="m-0 p-0 ml-2 text-sm">B</span>
      </div>
    </div>
  );
}

export default memo(AddNode);
