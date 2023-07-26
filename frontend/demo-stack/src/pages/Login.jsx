import { useState } from "react"
import { Form, Link } from "react-router-dom"

const Login = () => {

  const [user, setUser] = useState({
    email:"",
    password:"",
  })

  function handleChange(event) {
    const {name, value} = event.target
    setUserData(prevData => ({
      ...prevData,
      [name]: value 
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try{
      const body = { email, password }
      const response = await fetch('http://localhost:4000/user/register', {
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(body)
      });
      console.log(response);
    } catch(err){
      console.log(err.message);
    }
  }

  return (
    <React.Fragment>
      <fieldset>
      <Form className="login" onSubmit={handleSubmit} method="post">
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter e-mail" name="email" value={user.email} onChange={handleChange} required />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="enter your password" name="password" value={user.password} onChange={handleChange}required />
        <button type="submit">Login</button>
      </Form>
      <p>Not registered yet? <Link to='/register'>Register here</Link></p>
      </fieldset>
    </React.Fragment>
  )
}

export default Login
