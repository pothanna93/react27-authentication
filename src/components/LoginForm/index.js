import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  render() {
    const {username, password, errorMsg, showSubmitError} = this.state
    return (
      <div className="login-page-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo1"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />

        <div className="form-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo2"
          />
          <form className="form" onSubmit={this.onSubmitForm}>
            <label htmlFor="username" className="label-element">
              USERNAME
            </label>

            <input
              type="text"
              id="username"
              className="input-element"
              onChange={this.onChangeUsername}
              value={username}
              placeholder="Username"
            />
            <br />
            <label htmlFor="password" className="label-element">
              PASSWORD
            </label>

            <input
              type="password"
              id="password"
              className="input-element"
              onChange={this.onChangePassword}
              value={password}
              placeholder="Password"
            />

            <button type="submit" className="button-login">
              Login
            </button>
          </form>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </div>
      </div>
    )
  }
}
export default LoginForm
