import { connect } from 'dva'
import { Fragment } from 'react'
import { Redirect } from 'umi'

const Pravite = ({ userInfo, children }) => {
  if (userInfo) {
    return <Fragment>{ children }</Fragment>
  } else {
    return <Redirect to='/login'></Redirect>
  }
}

export default connect(
  (state) => ({
    userInfo: state.store.userInfo
  })
)(Pravite)
