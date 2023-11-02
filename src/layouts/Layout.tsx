import { Box, Container } from '@mui/material'
import React from 'react'
import Navbar, { NavbarModel } from './NavBar'
import { Outlet } from 'react-router-dom'
import AppFooter from './AppFooter'

function Layout() {

    const menuItems:NavbarModel[] = [{
        text:'CustomHook Sample',
        url:'/customHook'
    }, { text:'DeboucingSample', url:'/debouncing'}, {text:'reactFormsHook', url:'/reactFormsHook'}, {text:'useReducer Sample', url:'/useReducer' }, {text:'useContext Sample', url:'/useContext'}]

  return (
    <>
        <Container maxWidth='sm'>
            <Navbar items={menuItems} />
            <Box marginTop={'5rem'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}>
                <Outlet />
            </Box>
        </Container>
        <AppFooter />
    </>
  )
}

export default Layout