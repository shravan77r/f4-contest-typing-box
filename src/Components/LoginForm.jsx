import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useTheme } from '../Context/ThemeContext'
import { auth } from '../firebaseConfig'
import errorMapping from '../Utilities/errorMapping';

const LoginForm = ({handleModalClose}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {theme} = useTheme()

    const handleSubmit = ()=>{
      if(!email || !password){
        alert('Please fill all details...')
      }
      auth.signInWithEmailAndPassword(email,password).then((res)=>{
        alert("User logged in successfully...")
        handleModalClose()
      }).catch(err=>{
        alert(errorMapping[err.code] || 'Some error occured')
        alert(err)
      })
    }
  return (
    <Box
    p={3}
    style = {{
        display : 'flex',
        flexDirection : 'column',
        gap : '20px',

    }}
    >
        <TextField 
        variant='outlined'
        type='email'
        label = 'Enter Email'
        onChange={(e)=>setEmail(e.target.value)}

        InputLabelProps={{ //change color of label
          style : {
            color : theme.textColor
          }
        }}
        inputProps={{ //change color of input
          style : {
            color : theme.textColor
          }
        }}
        />
        <TextField
        variant='outlined'
        type='password'
        label = 'Enter Password'
        onChange={(e)=>setPassword(e.target.value)}
        InputLabelProps={{ //change color of label
          style : {
            color : theme.textColor
          }
        }}
        inputProps={{ //change color of input
          style : {
            color : theme.textColor
          }
        }}
        />
        <Button
        variant='contained' 
        size = 'large'
        style ={{
          background:theme.textColor,
          color : theme.background
        }}
        onClick = {handleSubmit}
        >
        Login</Button>
    </Box>
  )
}

export default LoginForm