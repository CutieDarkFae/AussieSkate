import * as React from "react";
import * as ReactDOM from "react-dom";

import { Main } from "./components/ui/Main";
import { Skater } from "./components/model/Skater";

let skaters:Skater[]=[
    new Skater(1, "Amy Sanders", new Date()),
    new Skater(2, "Bethany Teradano", new Date()),
    new Skater(3, "Caitlyn Anderson", new Date()),
];

ReactDOM.render(
    <Main skaters={skaters} />,
    document.getElementById("example")
);