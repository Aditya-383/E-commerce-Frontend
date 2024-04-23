import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
      <div className='flex items-center'>

        <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
             <img className='w-full h-full object-cover object-top' src="https://www.bing.com/th?id=OIP.1piiXRj_QA2ef5gthnz10QHaKG&pid=3.1&cb=&w=300&h=300&p=0" alt="" />
        </div>

        <div className='ml-5 space-y-1'>
            <p className='font-semibold'>Women slim Mid Rise Black </p>
            <p className='opacity-70'>Size: L,White</p>
            <p className='opacity-70 mt-2'>seller:Crishtaliyo 2 Fashion</p>

            <div className='flex space-x-5 items-center text-gray-900 pt-10'>
                <p className='font-semibold'>$199</p>
                <p className='opacity-50 line-through'>$211</p>
                <p className='text-green-600 font-semibold'>5% off</p>
            </div>
        </div>
      </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
            <div className='flex items-center space-x-2'>
                <IconButton>
                 <RemoveCircleOutlineIcon/> 
                </IconButton>

            <span className='py-1 px-7  rounded-sm'> 3 </span>
              <IconButton sx={{color:"rgb(145 85 243)"}}>
                <AddCircleOutlineOutlinedIcon/>
              </IconButton>
            </div>

            <Button sx={{color:"rgb(145 85 243)"}}>remove</Button>
        </div>
      
    </div>
  )
}

export default CartItem
