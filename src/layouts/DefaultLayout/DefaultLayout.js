import React,{Component} from "react";
import { Button } from 'antd';
import HeadNav from '../../commom/HeadNav'
import {Route} from "react-router-dom";
import About from "../../routes/About/About"
import Home from "../../routes/Home/Home"
import Article from "../../routes/Article/Article"
import Resource from "../../routes/Resource/Resource"
import './DefaultLayout.less'
export default class DefaultLayout extends Component{
    render(){
        return(
            <div id = "DefaultLayout" >
               <HeadNav/>
              <div className="content-wrap">
                <Route path={this.props.match.url+"/"} component={Home} exact/>
                <Route path={this.props.match.url+"/about"} component={About} />
                <Route path={this.props.match.url+"/article"} component={Article} />
                <Route path={this.props.match.url+"/reource"} component={Resource} />
              </div>
            </div>
        )
    }
}