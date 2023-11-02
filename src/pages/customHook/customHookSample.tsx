import React from 'react'
import UseAuthenticatedUser, { AuthenticatedUser } from './UseAuthenticatedUser'

function customHookSample() {

  const user:AuthenticatedUser | null =  UseAuthenticatedUser();

  // const user = localStorage.getItem('accessToken');

  return (
    <>
     sub: {user?.userId}
     <br></br>
     name: {user?.username}
    </>
  )
}

export default customHookSample