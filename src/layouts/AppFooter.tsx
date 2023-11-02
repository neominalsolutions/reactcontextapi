import { Box } from '@mui/material'
import React from 'react'

function AppFooter() {
  return (
    <Box sx={{position:'fixed', minHeight:'5vh', bottom:'0', backgroundColor:'black', color:'white', minWidth:'100vw', padding:'5px'}} justifyContent={'center'}
    >
        <p>Footer</p>
    </Box>
  )
}

export default AppFooter