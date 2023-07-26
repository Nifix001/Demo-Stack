import { useState } from "react"
import { Form, Link } from "react-router-dom"

const Register = () => {

  const [userData, setUserData] = useState({
    id:"",
    first_name:"",
    last_name:"",
    email:"",
    ip_address:"",
    gender:"", 
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
      const body = { id, first_name, last_name, email, ip_address, gender, password }
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
        <Form className="register" onSubmit={handleSubmit} method="post">
          <label htmlFor="id">Id</label>
          <input type="number" name="id" value={userData.id} onChange={handleChange} required />
          <label htmlFor="first_name">First Name</label>
          <input type="text" placeholder="enter your first name" name="first_name" value={userData.first_name} onChange={handleChange} required />
          <label htmlFor="last_name">Last Name</label>
          <input type="text" placeholder="enter your last name" name="last_name" value={userData.last_name} onChange={handleChange} required />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="enter your email" name="email" value={userData.email} onChange={handleChange} required />
          <label htmlFor="ip_address">IP Address</label>
          <input type="text" placeholder="enter your IP address" name="ip_address" value={userData.ip_address} onChange={handleChange} required />
          <label htmlFor="gender">Gender</label>
          <select name="gender" value={userData.gender} onChange={handleChange} required>
            <option value="" disabled>Select your gender</option>
            <option value="">Male</option>
            <option value="">Female</option>
          </select>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="enter your pasword" name="pasword" value={userData.password} onChange={handleChange} required />
          <button type="submit">Register</button>
        </Form>
        <p>Registered already <Link to='/login' >Login</Link></p>
      </fieldset>     
    </React.Fragment>
  )
}

export default Register
