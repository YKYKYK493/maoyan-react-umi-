import { Layout, Icon, Dropdown, Menu, Avatar } from "antd"
import { Component } from 'react'

import styles from './index.css'
import { connect } from "dva"

const { Header } = Layout

@connect(
  (state) => ({
    userInfo: state.store.userInfo
  })
)
class LayoutHeader extends Component {

  headerMenu = (
    <Menu>
      <Menu.Item onClick={() => {
          window.localStorage.removeItem('userInfo');
          window.location.reload();
        }}>
        <Icon type='logout'></Icon>
        <span>退出登录</span>
      </Menu.Item>
    </Menu>
  )

  render () {
    const { collapsed, toggle, userInfo } = this.props
    return(
      <Header className={styles.header}>
        <Icon
          className={styles.trigger}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggle}
        />
        <Dropdown overlay={this.headerMenu} className={styles.right}>
          <div className={styles.user}>
            <Avatar size={30} icon='user'></Avatar>
            <p>{userInfo && userInfo.username}</p>
          </div>
        </Dropdown>
      </Header>
    )
  }
}

export default LayoutHeader
