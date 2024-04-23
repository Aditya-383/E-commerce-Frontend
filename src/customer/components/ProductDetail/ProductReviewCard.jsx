import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={2}>
              <Box>
                <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155fd"}}>
                      A
                </Avatar>
              </Box>

        </Grid>

        <Grid item xs={9}>
            <div className='space-y-2'>
                <div>
                    <p className='font-semibold'>Ram</p>
                    <p className='opacity-70'>March 18,2024</p>
                </div>

            </div>

            <Rating readOnly value={3.5} name="half rating" precision={.5}></Rating>
            <p>nice product, I love this jeans</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductReviewCard
