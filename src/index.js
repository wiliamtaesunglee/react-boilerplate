import React from "react";
import { render } from "react-dom";

function Hi() {
  return <p>top</p>;
}

render(<Hi />, document.getElementById("app"));
