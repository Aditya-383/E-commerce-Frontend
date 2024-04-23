

import { Button, Grid, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import React from 'react'
import { login } from '../../Auth/Action';

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit=(event)=>{
        event.preventDefault();

        const data=new FormData(event.currentTarget);
// console.log("done1;")
        const userData={
            email:data.get("email"),
            password:data.get("password")
        }

        dispatch(login(userData));

        // console.log(userData);
    }
    return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          
         

          {/* email */}
           <Grid item xs={12} >
                <TextField
                    required
                    id='email'
                    name='email'
                    label='Email'
                    fullWidth
                    autoComplete='email'
                    >
                </TextField>
          </Grid>

          {/* password */}
           <Grid item xs={12}>
                <TextField
                    required
                    id='password'
                    name='password'
                    label='Password'
                    fullWidth
                    autoComplete='password'
                    >
                </TextField>
          </Grid>

        {/* button */}
         <Grid item xs={12}>
                <Button className='bg-[#9155FD] w-full'
                type='submit'
                variant='contained'
                size='large'
                sx={{padding:".8rem 0",bgcolor:"#9155FD"}}
                >
                LOGIN
                </Button>
          </Grid> 
            
        </Grid>
      </form>
      <div className='flex justify-center flex-col items-center'>
        <div className='py-3 flex item-cneter'>
            <p>if you dont't have already account ?</p>
            <Button onClick={()=>navigate("/register")} className='ml-5' size='small'>Register</Button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
