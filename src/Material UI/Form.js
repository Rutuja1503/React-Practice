import { Button, Stack, TextField } from '@mui/material'
import React from 'react'

const Form = () => {
  return (
    <center style={{ marginTop: '2rem' }}>
       <Stack spacing={4} row sx={{width:"20rem"}}>
          <TextField label="FirstName" variant="standard" />
          <TextField label="LastName" variant="standard" />
          <TextField label="Role" variant="standard" type="number" />
          <TextField  variant="standard" type="date" />
        </Stack>
        <br /> 
        <br />
        <br />
        <Button variant='contained' size='large'>Submit</Button>
    </center>
  )
}

export default Form
