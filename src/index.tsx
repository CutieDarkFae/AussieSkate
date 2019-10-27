import * as React from "react";
import * as ReactDOM from "react-dom";

import { Page } from "./components/ui/Page";
import { Skater } from "./components/model/Skater";

let skaters:Skater[]=[
    new Skater(1, "Amy Sanders", new Date()),
    new Skater(2, "Bethany Teradano", new Date()),
    new Skater(3, "Caitlyn Anderson", new Date()),
];

ReactDOM.render(
    <Page skaters={skaters} />,
    document.getElementById("example")
);