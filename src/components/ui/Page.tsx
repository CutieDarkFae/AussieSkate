import * as React from "react";
import { Table } from "./Table";
import { Skater } from "../model/Skater";

export interface PageProps {
    skaters: Skater[];
}
export class Page extends React.Component<PageProps, {}> {
    onAddSkater() {
        console.log("Add Skater clicked");
    }
    render() {
        const page = <div>
            <h1>List of Skaters</h1>
            <Table skaters={this.props.skaters} />
            <button id="addSkaterBtn" onClick={this.onAddSkater}>Add Skater</button>
            </div>;
        return page;
    }
}