import { Box, Container } from '@mui/material'
import React from 'react'
import Navbar, { NavbarModel } from './NavBar'
import { Outlet } from 'react-router-dom'
import AppFooter from './AppFooter'

function Layout() {

    const menuItems:NavbarModel[] = [{
        text:'CustomHook',
        url:'/customHook'
    }, { text:'Deboucing', url:'/debouncing'}, {text:'FormsHook', url:'/reactFormsHook'}, {text:'useReducer', url:'/useReducer' }, {text:'Ürünlerimiz', url:'/products'}, {text:'fakeLogin', url:'/auth/login'},{text:'Sepet Detay', url:'/cartSummary'}]

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