import React, { memo, useEffect } from "react";

import { Handle } from "reactflow";
import { useRecoilState } from "recoil";
import { dataStore } from "../atoms/dataAtom";
import { useNodes } from "reactflow";

export default memo(({ data, isConnectable }) => {
  const [op] = useRecoilState(dataStore);
  const nodes = useNodes();

  useEffect(() => {
    data.type = "output";
    data.data = [];
    console.log(data.type);
  }, [isConnectable]);

  useEffect(() => {
    // res = op.filter();
    let res = op.map((res) => {
      return nodes
        .filter((node) => node["data"]["label"] !== res["label"])
        .map((output) => {
          return output;
        });
    });

    data.value = op.map((res) => {
      return res["label"] == data.label ? res["value"][0] : null;
    });

    let newnodes = res.concat(op);
    console.log("hehe", data.value);
  }, [op]);

  return (
    <div
      className=" p-2 rounded text-white tracking-widest"
      style={{
        background: "#fd7f79",
      }}
    >
      <Handle
        type="target"
        position="left"
        style={{
          background: "white",
          width: 10,
          height: 10,
          // borderColor: "orange",
          borderRadius: "5px 5px 5px 0px",
          transform: "rotate(45deg)",
          top: 16,
        }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <div
        style={{
          width: "auto",
          color: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span>Output:</span>
        <span
          style={{
            background: "white",
            width: "auto",
            padding: 5,
            color: "black",
            marginLeft: 2,
            textAlign: "center",
            borderRadius: 10,
            flexGrow: "true",
          }}
        >
          {data.value}
        </span>
      </div>
    </div>
  );
});
