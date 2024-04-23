import React from 'react'
// import { Link } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material'



const Footer = () => {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10'
                container
                sx={{ bgcolor: "black", color: 'white', py: 3 }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6' gutterBottom> Company </Typography>

                    <div>
                        <Button className='pb-5' variant='h1' gutterBottom> About </Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h1' gutterBottom> Jobs </Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h1' gutterBottom> Press </Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6' gutterBottom> Solutions </Typography>

                    <div>
                        <Button className='pb-5' variant='h1' gutterBottom> About </Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h1' gutterBottom> Jobs </Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h1' gutterBottom> Press </Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6' gutterBottom> Documentation </Typography>

                    <div>
                        <Button className='pb-5' variant='h1' gutterBottom> Guides </Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h1' gutterBottom> API Status </Button>
                    </div>

                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography className='pb-5' variant='h6' gutterBottom> Legal </Typography>
                   
                    <div>
                        <Button className='pb-5' variant='h1' gutterBottom> About </Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h1' gutterBottom>Jobs </Button>
                    </div>

                    <div>
                        <Button className='pb-5' variant='h1' gutterBottom> Press </Button>
                    </div>
                </Grid>

                <Grid className='pt-20' item xs={12}>
                    <Typography variant='body2' component='p' align='center'>
                        &copy; 2024 My Company.All rights reserved.
                    </Typography>
                    <Typography variant='body2' component='p' align='center'>
                       Made by Me
                    </Typography>
                    <Typography variant='body2' component='p' align='center'>
                       Icons made by{' '}
                       {/* <Link href='https://www.freeik.com' color="inherit" underline="always">Freepik</Link> */}
                    </Typography>

                </Grid>

                

            </Grid>
        </div>
    )
}

export default Footer
