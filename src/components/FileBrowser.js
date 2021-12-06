import React, { useCallback, useEffect, useState } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import * as Icons from "react-bootstrap-icons";



export default function FileBrowser(value) {
  const callback = value.onClick;
  const { files } = value;
  console.log("fileBrowser", files);

  return (
    <>
      <div className="files viewport-fixed">
        <ListGroup cellSpacing="5px" cellPadding="5px">
          {console.log(files)}
          {files.map((item) => {
            if (item.type === "file")
              return (
                <ListGroup.Item className="item" key={item.name}>
                  <div className="flexbox-container">
                    <Icons.FileCode className="litle-margin" color="royalblue" />
                    <div className="ui relaxed ">
                      <div className="item" onClick={() => callback(item.name)}>
                        {item.name}
                      </div>
                    </div>
                  </div>
                </ListGroup.Item>
              );
            else
              return (
                <ListGroup.Item className="item" key={item.name}>
                  <div className="flexbox-container">
                  <Icons.Folder className="litle-margin" color="royalblue" />
                    <div className="ui relaxed ">
                      <div onClick={() => callback(item.name)}>{item.name}</div>
                    </div>
                  </div>
                </ListGroup.Item>
              );
          })}
        </ListGroup>
      </div>
    </>
  );
}
