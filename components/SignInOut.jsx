'use client';

import React from 'react'

import {useSession, signIn, signOut} from 'next-auth/react'

const SignInOut = () => {

    const {data} = useSession()
    if (session && session.user){
        
    }
  return (
    <div>


    </div>
  )
}

export default SignInOut