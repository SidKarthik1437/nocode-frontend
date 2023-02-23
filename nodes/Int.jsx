import React, { memo, useState } from "react";

import { Handle } from "reactflow";
import { useRecoilState } from "recoil";
import { dataStore } from "../atoms/dataAtom";

export default memo(({ data, isConnectable }) => {
  const [num, setnum] = useState(0);
  // const [iData, setiData] = useGlobalState("data");
  const [iData, setiData] = useRecoilState(dataStore);

  // let d = {};
  // d[data.id] = num;
  // console.log(d);
  // console.log(data.id)

  const handleChange = (event) => {
    event.preventDefault();
    setnum(event.target.value);
    data.value = event.target.value;
    data.type = "value";
  };

  // const setVal = (event) => {
  //   event.preventDefault();

  //   setiData((state) => ({
  //     ...state,
  //     [data.label]: num,
  //   }));
  //   console.log("idata", iData);
  // };

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
        <span>Int</span>
      </div>
      <div className="flex flex-col">
        <input
          className="w-20 px-2 rounded text-center"
          type="number"
          value={num}
          style={{ color: "black" }}
          onChange={(event) => handleChange(event)}
        />
        {/* <button
          className="bg-black w-20 h-10 text-white mt-2 rounded text-center"
          type="button"
          onClick={(event) => setVal(event)}
        >
          set
        </button> */}
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
