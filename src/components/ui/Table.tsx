import * as React from "react";
import { Skater } from "../model/Skater";
import { Row } from "./Row"

export interface TableProps { skaters: Skater[]; }

// 'TableProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Table extends React.Component<TableProps, {}> {
    render() {
        const rows = this.props.skaters.map((skater: Skater) => 
            <Row skater={skater} />
        );
        return <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>dob</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>;
    }
}