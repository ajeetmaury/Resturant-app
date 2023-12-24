import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const about = () => {
  return (
    <Layout>
      <Box sx={{
        my: 10,
        textAlign: "center",
        p: 2,
        "& h4": {
          fontWeight: "bold",
          my: 2,
          fontSize: "2rem"
        },
        "& p":{
          textAlign:'justify',
        },
        "@media (max-width:600px)": {
          mt: 0,
          "& h4":{
            fontSize:'1.5rem',
          }
        },
      }}>
        <Typography variant='h4'>
          Welcome to My Resturant
        </Typography>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis totam 
        eligendi porro architecto nulla, minus aliquam eos quaerat reiciendis 
        alias harum placeat earum dolor, ullam modi voluptas nesciunt debitis 
        quos. Vel ducimus illo non perspiciatis. Nobis porro optio dolorem 
        molestiae, rerum enim aliquam unde officiis cum eligendi quam 
        reiciendis provident sit iste ipsam accusantium odit iusto dolore? 
        Omnis, labore assumenda?Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Quis totam eligendi porro architecto nulla, minus aliquam eos quaerat 
        reiciendis alias harum placeat earum dolor, ullam modi voluptas nesciunt 
        debitis quos.
        </p>
        <br></br>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis totam 
        eligendi porro architecto nulla, minus aliquam eos quaerat reiciendis 
        alias harum placeat earum dolor, ullam modi voluptas nesciunt debitis 
        quos. Vel ducimus illo non perspiciatis. Nobis porro optio dolorem 
        molestiae, rerum enim aliquam unde officiis cum eligendi quam 
        reiciendis provident sit iste ipsam accusantium odit iusto dolore? 
        Omnis, labore assumenda?Lorem ipsum dolor sit amet consectetur adipisicing 
        elit. Quis totam eligendi porro architecto nulla, minus aliquam eos quaerat 
        reiciendis alias harum placeat earum dolor, ullam modi voluptas nesciunt 
        debitis quos.
        </p>
      </Box>
    </Layout>
  )
}

export default about
