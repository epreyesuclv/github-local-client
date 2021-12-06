import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Octokit } from "octokit";
import FileBrowser from "./FileBrowser";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import * as Icons from "react-bootstrap-icons";

export default function NestedEditableDemo() {
  const { username, repo } = useParams();

  const [state, setState] = useState({
    files: [],
    details: "",
    path: "",
    namefile: "",
  });

  async function fetch(username, repo) {
    const octokit = new Octokit();
    return await octokit.rest.repos.getContent({
      mediaType: {
        format: "raw",
      },

      owner: `${username}`,
      repo: `${repo}`,
      path: state.path,
    });
  }

  //todo path
  async function submit() {
    await fetch(username, repo).then(({ data }) => {
      console.log("submit", data);
      if (typeof data == "string") {
        state.namefile = state.path.split("/").reverse()[0];
        console.log("file", state.namefile);
        back();
        state.details = data;
        setState({ ...state });
      } else {
        state.files = data;
        setState({ ...state });
      }
    });
  }

  function advance(name) {
    if (state.path == "") name = state.path + name;
    else name = state.path + "/" + name;

    state.path = name;

    setState({ ...state });
  }

  function back() {
    const index = state.path.lastIndexOf("/");
    console.log("index", index);
    if (index != -1) state.path = state.path.slice(0, index);
    else state.path = "";
    setState({ ...state });
  }

  useEffect(() => {
    submit();
    return () => {};
  }, []);

  return (
    <div className="tabledirectory padding-total">
      <div
        className="item"
        onClick={() => {
          back();
          submit();
        }}
      >
        <Button className="padding-total" variant="primary">
          <Icons.ArrowLeft />
        </Button>
      </div>
      <FileBrowser
        className="padding-total viewport-fixed"
        files={state.files}
        onClick={(value) => {
          advance(value);
          submit();
        }}
      />

      <div
        style={{ borderTop: "1px solid rgba(0,0,0,1)", width: "auto" }}
      ></div>
      <Card className="fullcard " border="success">
        <Card.Header className="font-big">{state.namefile} </Card.Header>
        <Card.Body>
          <Card.Text className="paragraph">{state.details}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
