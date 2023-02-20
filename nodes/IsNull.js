import React, { memo, useState } from "react";

import { Handle } from 'reactflow';
import { IoInformationSharp } from "react-icons/io5";

export default memo(({ data, isConnectable }) => {

  // const [show, setShow] = useState([])
  // const [hide, setHide] = useState(['subset', 'keep', 'inplace', 'inplace', 'ignore-index'])]
  // var i =0;
  let show = [true, true, true, true]
  // const [display, setDisplay] =useState(show[i])
  const [isactive, setIsactive] = useState(false);
  // const [isactive1, setIsactive1]= useState(false);
  
  console.log(isactive)
  const more = () =>{
    setIsactive(true);
  }



  return (
  <div className={`H ${isactive ? 'show' : 'hide'}`}>

    <div className="bg-purple-600 w-62 h-40 pt-2 rounded text-white">
      <div style={{ display: "block" }}>
        <div>
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
        </div>
        <div></div>
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
        <div className="text-center mr-4 ml-4" style={{marginLeft:'48px',marginRight:'48px'}}>Is Null</div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="h-5">
            <Handle
              type="target"
              position="left"
              style={{
                background: "transparent",
                width: 10,
                height: 10,

                borderRadius: "5px 0px 5px 5px",
                transform: "rotate(45deg)",
                top: 40,
              }}
              onConnect={(params) => console.log("handle onConnect", params)}
              isConnectable={isConnectable}
              id="a"
            />
            <span className="m-0 p-0 ml-4 text-sm">isnull </span>
          </div>
          {show[0] && (
            <div className={`menu ${isactive ? 'show' : 'hide'}`} >
              <Handle
                type="target"
                position="left"
                style={{
                  background: "transparent",
                  width: 10,
                  height: 10,

                  borderRadius: "5px 0px 5px 5px",
                  transform: "rotate(45deg)",
                  top: 60,
                }}
                onConnect={(params) => console.log("handle onConnect", params)}
                isConnectable={isConnectable}
                id="a"
              />
              <span className="m-0 p-0 ml-4 text-sm">isna </span>
            </div>
          )}
          {show[1] && (
            <div className={`menu ${isactive ? 'show' : 'hide'}`} >
              <Handle
                type="target"
                position="left"
                style={{
                  background: "transparent",
                  width: 10,
                  height: 10,

                  borderRadius: "5px 0px 5px 5px",
                  transform: "rotate(45deg)",
                  top: 80,
                }}
                onConnect={(params) => console.log("handle onConnect", params)}
                isConnectable={isConnectable}
                id="b"
              />
              <span className="ml-4 text-sm">isna.any </span>
            </div>)}
          {show[2] && (<div className={`menu ${isactive ? 'show' : 'hide'}`} >
            <Handle
              type="target"
              position="left"
              style={{
                background: "transparent",
                width: 10,
                height: 10,

                borderRadius: "5px 0px 5px 5px",
                transform: "rotate(45deg)",
                top: 100,
              }}
              onConnect={(params) => console.log("handle onConnect", params)}
              isConnectable={isConnectable}
              id="c" />
            <span className="ml-4 text-sm">isna.sum</span>
          </div>
          )}
          {show[3] && (<div className={`menu ${isactive ? 'show' : 'hide'}`} >
              <Handle
                type="target"
                position="left"
                style={{
                  background: "transparent",
                  width: 10,
                  height: 10,
                  borderRadius: "5px 0px 5px 5px",
                  transform: "rotate(45deg)",
                  top: 120,
                }}
                onConnect={(params) => console.log("handle onConnect", params)}
                isConnectable={isConnectable}
                id="d" />
              <span className="ml-4 text-sm">isna.any.sum </span>
            </div>)}
            <div className={`B ${isactive ? 'show' : 'hide'}`} >
                <button className="butt text-sm"  onClick={more}>More</button>
                <button className='tooltip'><IoInformationSharp/>
                <span className='tooltiptext'> Detect missing values in the given object.</span>
                </button>
            </div>  
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="h-5 ">
            <Handle
              type="source"
              position="right"
              style={{
                background: "transparent",
                width: 10,
                height: 10,

                borderRadius: "5px 5px 5px 0px",
                transform: "rotate(45deg)",
                top: 39,
              }}
              isConnectable={isConnectable}
              id="out"
            />
            <span className="op mr-4 ml-3 text-sm">output </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
});

