

import { Button, Grid, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import React from 'react'
import { getUser, register } from '../../Auth/Action';
import { store } from '../../State/store'; 
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


const RegisterForm = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const { auth }=useSelector(store=>store)

  useEffect(()=>{
    if(jwt){
      dispatch(getUser(jwt));
    }
  },[jwt,auth.jwtm,dispatch])
//  console.log("jwt" ,jwt);  
  
    
    const handleSubmit=(event)=>{
        event.preventDefault();

        const data=new FormData(event.currentTarget);
// const data;
       
        const userData={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            email:data.get("email"),
            password:data.get("password")
        }
      dispatch(register(userData));

        console.log("userData" ,userData);
    }
    return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id='firstName'
                    name='firstName'
                    label='First Name'
                    fullWidth
                    autoComplete='given-name'
                    >
                </TextField>
          </Grid>
           <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id='lastName'
                    name='lastName'
                    label='Last Name'
                    fullWidth
                    autoComplete='given-name'
                    >
                </TextField>
          </Grid>

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
                REGISTER
                </Button>
          </Grid>
            
        </Grid>
      </form>
      <div className='flex justify-center flex-col items-center'>
        <div className='py-3 flex item-cneter'>
            <p>if you have already account ?</p>
            <Button onClick={()=>navigate("/login")} className='ml-5' size='small'>Login</Button>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
