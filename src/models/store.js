import Axios from 'axios'
import { router } from 'umi'
import { message } from 'antd'

const userInfo = window.localStorage.getItem('userInfo')

export default {
  state: {
    userInfo: userInfo ? JSON.parse(userInfo) : null
  },

  effects: {
    *asyncLogin (action, { put }) {
      const { data } = yield Axios.post('http://localhost:3000/login', action.payload)
      if (data.code === 0) {
        yield put({
          type: 'login',
          payload: data.data.userInfo
        })
        message.success('登陆成功', 2, () => {
          router.replace('/')
        })
        window.localStorage.setItem('userInfo', JSON.stringify(data.data.userInfo))
      } else {
        message.error('登陆成功')
      }
    }
  },

  reducers: {
    // 用户登录
    login(state, action) {
      return {
        ...state,
        userInfo: action.payload
      }
    }
  }
}
