import React, { useState } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'

function SignUp(){
    const [userEmailReg, setUserEmailReg] = useState('')
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    
    const register = () => {
      axios.post('http://localhost:3001/register', {userEmail: userEmailReg, username: usernameReg, password: passwordReg,}).then((response) => {
      console.log(response)})
    }
    return(
        <div className="SignUp">
          <Navbar/>
          <center>
            <h1>Registration</h1>
            <label>Email</label>
            <input type="text" onChange={(e)=>{
              setUserEmailReg(e.target.value)
            }}/> <br />
            <label>Username</label>
            <input type="text" onChange={(e) => {
              setUsernameReg(e.target.value)
            }}/> <br />
            <label>Password</label>
            <input type="text" onChange={(e) => {
              setPasswordReg(e.target.value)
            }}/> <br />
            <button onClick={register}>Register</button>
            <br />
            <a href="/login">Já possui uma conta? Faça o Login aqui.</a>
          </center>
        </div>
      )
}
export default SignUp