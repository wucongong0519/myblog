import React,{Component} from "react";
import {HashRouter,Route,Switch} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import LoginUser from "./layouts/LoginLayout/LoginLayout";
export default class RouterWrap extends Component{
    render(){
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route  path="/" component={LoginUser} exact/>
                        <Route path="/home" component={DefaultLayout}/>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}