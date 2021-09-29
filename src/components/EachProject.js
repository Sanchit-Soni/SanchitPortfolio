import React from "react";

const EachProject = (props) => {
  let stateData = props.location.state;
  var id = stateData["id"];
  var name = stateData["name"];
  return (
    <div>
      <h1>Hello</h1>
      <h1>{id}</h1>
      <h1>{name}</h1>
    </div>
  );
};

export default EachProject;
