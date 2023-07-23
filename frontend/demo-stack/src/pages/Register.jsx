import { Form } from "react-router-dom"

const Register = () => {
  return (
    <div>
      <fieldset>
        <Form>
          <label>Id</label>
          <input type="number" required />
          <label>First Name</label>
          <input type="text" required />
          <label>Last Name</label>
          <input type="text" required />
          <label>Email</label>
          <input type="email" required />
          <label>IP Address</label>
          <input type="text" required />
          <label>Gender</label>
          <select>
            <option value="">Male</option>
            <option value="">Female</option>
          </select>
          <label>Password</label>
          <input type="password" required />
        </Form>
      </fieldset>     
    </div>
  )
}

export default Register
