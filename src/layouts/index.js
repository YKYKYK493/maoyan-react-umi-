import { Layout } from 'antd'
import { Component } from 'react'

import SiderItems from '../components/SiderItems'
import LayoutHeader from '../components/LayoutHeader'

const { Sider, Content } = Layout

class BasicComponent extends Component {
  state = {
    collapsed: false
  }

  toggle () {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render () {
    const { collapsed } = this.state
    const { location } = this.props
    if (location.pathname === '/login') {
      return(
        <Layout>{ this.props.children }</Layout>
      )
    }
    return (
      <Layout>
        <Sider collapsible collapsed={collapsed}>>
          <SiderItems></SiderItems>
        </Sider>
        <Layout>
          <LayoutHeader collapsed={collapsed} toggle={this.toggle.bind(this)}></LayoutHeader>
          <Content>{ this.props.children }</Content>
        </Layout>
      </Layout>
    )
  }
}

export default BasicComponent
