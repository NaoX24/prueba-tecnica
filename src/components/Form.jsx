import { useState} from 'react'
import { useUsers } from './../App';

const myForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { users, setUsers } = useUsers()
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Username : ${name} Email : ${email} Password: ${password}`)
    setUsers([...users, name])
  }
  return (
    <>
      <h1>My Form</h1>
      <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button onClick={() => console.log('Added user')}>
            Submit
          </button>
        </form>
    </>
   )
}
export default myForm