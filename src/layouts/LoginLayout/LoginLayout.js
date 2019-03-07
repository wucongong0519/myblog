import React,{Component} from "react"
import {
    Form, Icon, Input, Button, Checkbox,
  } from 'antd';
import {Link} from "react-router-dom";
import "./LoginLayout.less"


export default class LoginUser extends Component{
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            this.props.history.push('/home')
          }
        });
    }
    render(){
        console.log(this.props)
        const { getFieldDecorator } = this.props.form;
        
        return(
            <div id="components-form-demo-normal-login">
               <Form className="login-form" onSubmit={this.handleSubmit}>
                   <Form.Item>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入用户名!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                        )}
                   </Form.Item>
                   <Form.Item>
                       {getFieldDecorator("password",{
                           rules:[{ required: true, message: '请输入密码!' }]
                       })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>} placeholder="密码"/>)
                       }
                   </Form.Item>
                   <Form.Item>
                       {/* {getFieldDecorator("remember",{
                           initialValue:true,
                       })(<Checkbox>记住我</Checkbox>)
                       } */}
                        <a className="login-form-forgot" href="">忘记密码</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                        Or
                        <a>立即注册</a>
                   </Form.Item>
               </Form>
            </div>
        )
    }
}
LoginUser = Form.create({  })(LoginUser); 