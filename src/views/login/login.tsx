import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Button, Form } from 'semantic-ui-react'
import { loginUser } from '../../utils/api/login'

interface State {
  account: string,
  password: string
}

class ToLogin extends React.Component{
  constructor(props: any) {
    super(props)
    this.state = {
      account: '',
      password: ''
    }
  }

  UNSAFE_componentWillMount() {
    const { history }: any = this.props
    const loginSuccess = localStorage.getItem('kmr_userInfo')
    if (loginSuccess) {
      history.push('/ticTacToe')
    } 
  }

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  synchronizationAccount = (e: any) => {
    this.setState({ account: e.target.value })
  }

  synchronizationPsw = (e: any) => {
    this.setState({ password: e.target.value })
  }

  login = () => {
    const _this = this
    if ((this.state as State).account && (this.state as State).password) {
      loginUser({ ..._this.state }).then(res => {
        if ((res as any).code === 200) {
          localStorage.setItem('kmr_userInfo', JSON.stringify({account: res.data.account}));
          (this.props as any).history.push('/ticTacToe')
        }
      })
    }
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label className='input-label'>账号</label>
          <input placeholder='账号' value={(this.state as State).account} onChange={this.synchronizationAccount} />
        </Form.Field>
        <Form.Field>
          <label className='input-label'>密码</label>
          <input placeholder='密码' value={(this.state as State).password} onChange={this.synchronizationPsw} />
        </Form.Field>
        <Button inverted color='violet' type='submit' onClick={this.login}>登录</Button>
      </Form>
    )
  }
}

const Login = withRouter(ToLogin as any)
export default Login
