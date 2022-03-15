import { useState } from 'react'
import { TextField, Button } from '@mui/material'

const Signup = () => {
    const [email, setEmail] = useState('')
    console.log(email)
    const [password, setPassword] = useState('')
    console.log(password)

    const handleSignup = () => {
        fetch('http://localhost:3001', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password})
        }) 
        
        .then(res => res.json())
        .then(data => alert(data.message))
        .catch((err) => alert(err))
    }


  return (
    <>
      <div>
        <h3>Sign up</h3>
        <TextField
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSignup} variant="contained">Signup</Button>
      </div>
    </>
  )
}

export default Signup
