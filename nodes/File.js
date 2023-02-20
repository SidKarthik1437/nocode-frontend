import React, { memo, useRef, useState } from "react";
import axios from "axios";
import { Handle } from 'reactflow';

export default memo(({ data, isConnectable }) => {
  const [file, setFile] = useState(null);
  const filePickerRef = useRef(null);

  const handleChange = (event) => {
    const reader = new FileReader();
    if (event.target.files) {
      reader.readAsDataURL(event.target.files[0]);
    }
    // console.log(reader.readAsDataURL(event.target.files[0]));

    reader.onload = (readerEvent) => {
      console.log(readerEvent);
      // setFile(readerEvent.target.result);
    };
    setFile(event.target.files[0]);
    console.log(reader);
  };
  console.log(file);
  const handleUpload = (event) => {
    let form_data = new FormData();
    form_data.append("file", file);
    form_data.append("name", file.name);

    axios
      .post("http://127.0.0.1:8000/api/file/upload/", form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  console.log(filePickerRef);

  return (
    <div className="bg-blue-500 p-2 rounded text-white tracking-wider">
      <div className="text-center">File</div>
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
      <input
        type="file"
        onChange={(event) => handleChange(event)}
        // value={file}
        ref={filePickerRef}
      />
      <button
        className="bg-black w-20 h-10 text-white mt-2 rounded text-center"
        type="button"
        onClick={(event) => handleUpload(event)}
      >
        upload
      </button>
    </div>
  );
});
