import React from 'react'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"

function Nav() {
  return (
    <div className=' top-0 w-full   w-max-5xl flex items-center justify-between '>
        
        <div className='text-neutral-300'>
            Research
        </div>
         
   <div className='flex gap-2'>
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

      
      </div>
    </div>
  )
}

export default Nav