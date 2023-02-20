import React, { memo, useRef, useState } from "react";
import axios from "axios";
import { Handle } from 'reactflow';

export default memo(({ data, isConnectable }) => {
  const [file, setFile] = useState();
  const [fileData, setFileData] = useState();
  const filePickerRef = useRef(null);

  function datatouri({temp}) {
    console.log(temp);
    const reader = new FileReader();
    // const les = new Blob(fil);
    reader.readAsDataURL(temp);
    reader.onload = (e) => {
      console.log(e);
      setFile(e.target.result);
    };
  }

  const handleChange = async (event) => {
    let temp = event.target.files[0];
    await datatouri(temp).then((dataUri) => {
      setFile(dataUri);
    });
    console.log(file);
  };

  const handleUpload = async (event) => {
    // handleChange(event);

    console.log(file);
    console.log(fileData);
    const formData = new FormData();

    formData.append("file", file);
    // formData.append("name", fileData.name);
    let URL = "http://127.0.0.1:8000/api/file/upload";

    console.log(formData);
    // await fetch(URL, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "multipart/form-data",
    //   },
    //   body: formData,
    // });

    // const reader = new FileReader();
    // console.log("e", event);
    // // if (event.target.files) {
    // //   var lol = reader.readAsDataURL(event.target.files[0]);
    // //   console.log("lol", lol);
    // // }
    // // console.log(reader.readAsDataURL(event.target.files));

    // reader.onload = (readerEvent) => {
    //   console.log("re", readerEvent);
    //   // setFile(readerEvent.target.result);
    // };
    // // setFile(event.target.value);

    //   axios
    //     .post("http://127.0.0.1:8000/api/file/upload/", form_data, {
    //       headers: {
    //         "content-type": "multipart/form-data",
    //       },
    //     })
    //     .then((res) => {
    //       console.log(res.data);
    //     })
    //     .catch((err) => console.log(err));
  };

  // console.log(filePickerRef);

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
        onInput={(event) => handleChange(event)}
        // value={file || null}
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
