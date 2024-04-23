// details about my order



import React from 'react'
import AddressCard from '../AdderessCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div>
        <div className='px:5 lg:px-20'>
        <h1 className='font-semibold text-xl py-7'>Delivery Address</h1>
      <AddressCard/>
        </div>
        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>

        <Grid className='space-y-5 px:5 lg:px-20' container>

        {[1,1,1,1,1].map((item)=> <Grid item container className="shadow-xl rounded-md p-5 border "
            sx={{alignItems:"center",justifyContent:"space-between"}}>

             <Grid item xs={6}>

                <div className='flex items-center space-x-4'>
                  <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://www.bing.com/th?id=OIP.1piiXRj_QA2ef5gthnz10QHaKG&pid=3.1&cb=&w=300&h=300&p=0" alt="" />
                    
                    <div className='space-y-2 ml-5'>
                      <p>Men Slice Mid Rise Black Jeans</p>
                       <p className='space-x-5 opacity-50 text-xs font-semibold'> <span>Color: Pink</span> <span>Size: M</span></p>
                       <p>Seller linaris</p>
                       <p>$1099</p>
                    </div>
                </div>
              </Grid>

              <Grid item>

                <Box sx={{color:deepPurple[500]}}>
                  <StarBorderIcon sx={{fontSize:'2rem'}} className='px-2'/>
                  <span>Rate & Review Product</span>
                </Box>

              </Grid>

            </Grid>
        )}
           

        </Grid>
    </div>
  )
}

export default OrderDetails
