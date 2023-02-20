import React, { memo } from "react";

import { Handle } from 'reactflow';


export default memo(({ data, isConnectable }) => {
  return (
    <div className="bg-pink-600 w-62 h-32 pt-2 rounded text-white" style={{height: '95px'}}>
      <div style={{ display: "block" }}>
        <Handle
          type="target"
          position="left"
          style={{
            background: "white",
            width: 10,
            height: 10,

            borderRadius: "5px 0px 5px 5px",
            transform: "rotate(45deg)",
            top: 15,
          }}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
          id="flow-in"
        />
        <Handle
          type="source"
          position="right"
          style={{
            background: "white",
            width: 10,
            height: 10,

            borderRadius: "5px 5px 5px 0px",
            transform: "rotate(45deg)",
            top: 15,
          }}
          onConnect={(params) => console.log("handle onConnect", params)}
          isConnectable={isConnectable}
          id="flow-out"
        />
        <div className="text-center" style={{marginLeft: "12px", marginRight: "12px"}}>KNN</div>
      </div>

    
          <div className="h-5" style={{ display: "flex", flexDirection: "column" ,justifyContent:"center"}}>
            <Handle
              type="target"
              position="left"
              style={{
                background: "transparent",
                width: 10,
                height: 10,

                borderRadius: "5px 0px 5px 5px",
                transform: "rotate(45deg)",
                top: 59 ,
              }}
              onConnect={(params) => console.log("handle onConnect", params)}
              isConnectable={isConnectable}
              id="a"
            />
            <span className="m-0 p-0 ml-4 mt-10 text-sm" style={{marginLeft: "13px"}}>data </span>
          </div>
           
        <div className="h-5 "style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Handle
              type="source"
              position="right"
              style={{
                background: "transparent",
                width: 10,
                height: 10,

                borderRadius: "5px 5px 5px 0px",
                transform: "rotate(45deg)",
                top: 58,
                marginRight:0,
              }}
              isConnectable={isConnectable}
              id="out"
            />
            <span className="ml-12  text-sm"style={{marginLeft: '60px',marginRight: '14px'}} >output </span>
         </div>
         </div>
  );
});