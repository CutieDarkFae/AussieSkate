import * as React from "react";
import { Table } from "./Table";
import { Skater } from "../../model/Skater";

export interface SkaterPageProps {
    skaters: Skater[];
}
export default class SkaterPage extends React.Component<SkaterPageProps, {}> {
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