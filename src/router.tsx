import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {HomePage} from "./pages/home/home";
import {TestPage} from "./pages/test/test";
import {ChartPage} from "./pages/chart/chart";
import {CommentPage} from "./pages/comment/commentPage";

export class AppRouter extends React.Component{

    render(){
        return <BrowserRouter>
            <Switch>
                <Route path="/test" component={TestPage}/>
                <Route path="/chart" component={ChartPage}/>
                <Route path="/comment" component={CommentPage}/>
                <Route component={HomePage}/>
            </Switch>
        </BrowserRouter>
    }
}