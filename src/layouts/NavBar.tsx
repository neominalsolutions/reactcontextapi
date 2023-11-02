import { AppBar, Box, Button, Divider, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

type NavbarProps = {
  items: NavbarModel[];
}

export interface NavbarModel {
  url:string;
  text:string;
}

function Navbar(props:NavbarProps) {

  const {items} = props;


const handleDrawerToggle = () => {
    
}

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs:'block', sm: 'none', md:'none', lg:'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Architecht
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {items.map((item:NavbarModel, index:number) => (

              <Link style={{color:'white', textDecoration:'none', padding:'2px'}} key={index} to={item.url}>
                   {item.text}
              </Link>

              
      
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar