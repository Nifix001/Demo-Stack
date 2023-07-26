import { Form, Link } from "react-router-dom"

const Login = () => {
  return (
    <React.Fragment>
      <fieldset>
      <Form className="login">
        <label>Email</label>
        <input type="email" required />
        <label>Password</label>
        <input type="password" required />
        <button>Login</button>
      </Form>
      <p>Not registered yet? <Link to='/register'>Register here</Link></p>
      </fieldset>
    </React.Fragment>
  )
}

export default Login
