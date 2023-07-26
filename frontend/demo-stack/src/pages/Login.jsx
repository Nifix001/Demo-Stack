import { useState } from "react"
import { Form, Link } from "react-router-dom"

const Login = () => {

  const [user, setUser] = useState({
    email:"",
    password:"",
  })

  return (
    <React.Fragment>
      <fieldset>
      <Form className="login" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter e-mail" name="email" value={user.email} required />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="enter your password" name="password" value={user.password} required />
        <button>Login</button>
      </Form>
      <p>Not registered yet? <Link to='/register'>Register here</Link></p>
      </fieldset>
    </React.Fragment>
  )
}

export default Login
