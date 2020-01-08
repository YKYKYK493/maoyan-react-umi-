import { Layout, Icon } from "antd"
import { Component } from 'react'

import styles from './index.css'

const { Header } = Layout

class LayoutHeader extends Component {
  render () {
    const { collapsed, toggle } = this.props
    return(
      <Header className={styles.header}>
        <Icon
          className={styles.trigger}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggle}
        />
      </Header>
    )
  }
}

export default LayoutHeader
