import { Grid } from '@mui/material'
import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
  const navigate = useNavigate();
  return (
      <div onClick={()=>navigate(`/account/order/${5}`)}className='p-5  shadow-md shadow-black hover:shadow-2x1 border'> 
      <Grid container spacing={2} sx={{justifyContent:"space-between"}} >
        <Grid item xs={6}>
                
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-top'
                    src="https://www.bing.com/th?id=OIP.1piiXRj_QA2ef5gthnz10QHaKG&pid=3.1&cb=&w=300&h=300&p=0" alt="" />
                    <div className='ml-5 space-y-4'>
                        <p className=''>Women Slim Mid Rise Black Jeans</p>
                        <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                    </div>
                </div>

        </Grid>

        <Grid item xs={2}>
            <p>$1099</p>
        </Grid>

        <Grid item xs={4}>
            {true && <div>
                <p>
                <FiberManualRecordIcon sx={{width:'15px', height:"15px"}} className='text-green-600
                mr-2 text-sm'/>
                  <span>
                    Delivered On March 03
                  </span>
            </p>
            <p className='text-xs'>
                Your Item Has Been Delivered
            </p>
            </div>}
            {false && <p>
                <span>
                    Expected Delivery On March 03
                </span>
                </p> }


        </Grid>

      </Grid>
    </div>
  )
}

export default OrderCard
