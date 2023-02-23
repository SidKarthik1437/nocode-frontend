import React, { memo, useState } from "react";

import { Handle } from "reactflow";
import { useRecoilState } from "recoil";
import { dataStore } from "../atoms/dataAtom";

export default memo(({ data, isConnectable }) => {
  const [bool, setBool] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    setBool(event.target.value);
    data.value = event.target.value;
    data.type = "value";
  };

  return (
    <div className="bg-blue-500 p-2 w-auto h-auto rounded text-white tracking-wider">
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
        <span>Boolean</span>
      </div>
      <div className="flex flex-col">
        <input
          className="w-20 text-black pt-2 rounded text-center"
          type="checkbox"
          onChange={(event) => handleChange(event)}
          value={bool}
        />
      </div>
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
