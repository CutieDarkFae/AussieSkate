import * as React from "react";
import { Skater } from "../../model/Skater";

export interface RowProps { skater: Skater }

// 'RowProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Row extends React.Component<RowProps, {}> {
    render() {
        return <tr key={this.props.skater.id}>
            <td>{this.props.skater.id}</td>
            <td>{this.props.skater.name}</td>
            <td>{this.props.skater.dob.toDateString()}</td>
        </tr>;
    }
}