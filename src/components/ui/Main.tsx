import * as React from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import SkaterPage from "./SkaterPage/SkaterPage"
import Home from "./Home/Home"

export default class Main extends React.Component {
    // this is the main page, that holds everything else
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Aussie Skate</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/skaters">Skaters</NavLink></li>
                    </ul>

                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/skaters" component={SkaterPage} />
                    </div>
                </div>
            </HashRouter>
        )
    }
}