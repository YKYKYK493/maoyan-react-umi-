import { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'
import { connect } from 'dva'

import styles from './index.css'

const { Item } = Form

@Form.create()
@connect(
  null,
  {
    asyncLogin (payload) {
      return {
        type: 'store/asyncLogin',
        payload
      }
    }
  }
)
class Login extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.asyncLogin(values)
      }
    });
  };

  render () {
    const { getFieldDecorator } = this.props.form
    return(
      <Form className={styles.form} onSubmit={this.handleSubmit}>
        <Item label='用户名：'>
          {
            getFieldDecorator('username', {
              rules: [
                { required: true, message: '用户名不能为空' },
                { max: 15, message: '长度不能超过15' },
                { pattern: new RegExp(/^[0-9a-zA-z]{1,}$/), message: '用户名只能包含数字和字母' }
              ]
            })(
              <Input
                prefix={<Icon type="user"/>}
                placeholder="Username"
              />
            )
          }
        </Item>

        <Item label='密码：'>
          {
            getFieldDecorator('password', {
              rules: [
                { required: true, message: '密码不能为空' },
                { max: 10, message: '长度不能超过10' }
                ]
            })(
              <Input
                prefix={<Icon type="lock"/>}
                placeholder="Password"
                type="password"
              />
            )
          }
        </Item>

        <Item>
          <Button block type="primary" htmlType="submit" className="login-form-button">
            登 录
          </Button>
        </Item>
      </Form>
    )
  }
}

export default Login
