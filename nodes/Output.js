import React, { memo } from "react";

import { Handle } from 'reactflow';
import { useRecoilState } from "recoil";
import { Output } from "../atoms/outputAtom";

export default memo(({ data, isConnectable }) => {

  const [op] = useRecoilState(Output);

  return (
    <div className="bg-blue-400 p-2 rounded text-white tracking-wide">
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
      <div
        style={{
          width: 'auto',
          color: "white",
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <span>
        Output:
        </span>
        <span
          style={{
            background: "white",
            width: 'auto',
            padding: 5,
            color: "black",
            marginLeft: 2,
            textAlign: "center",
            borderRadius: 10,
            flexGrow: 'true'
          }}
        >
          {op}
        </span>
      </div>
    </div>
  );
});
