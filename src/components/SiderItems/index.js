import { Menu, Icon } from 'antd'
import { Component, Fragment } from 'react'
import { Link, withRouter } from 'umi'

import styles from './index.css'

const { Item } = Menu

@withRouter
class SiderItems extends Component {
  render () {
    const { location: { pathname } } = this.props
    return (
      <Fragment>
        <div className={styles.logo} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname]}>

          <Item key="/">
           <Link to='/'>
              <Icon type="user" />
              <span>1</span>
            </Link>
          </Item>

          <Item key="/lunbo">
            <Link to='/lunbo'>
              <Icon type="video-camera" />
              <span>轮播图管理</span>
            </Link>
          </Item>

          <Item key="/city">
            <Link to='/city'>
              <Icon type="upload" />
              <span>城市管理</span>
            </Link>
          </Item>

        </Menu>
      </Fragment>
    )
  }
}

export default SiderItems
