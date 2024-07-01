import SignUpFormProvider from '@/components/forms/sign-up/form-provider'
import React from 'react'


type Props = {}
const SignUp = (props: Props) => {
  return (
    <div className='flex-1 py-36 md:px16 w-full'>
        <div className='flex flex-col h-full gap-3'>
          <SignUpFormProvider>
            <div className='flex flex-col gap-3'>

            </div>
          </SignUpFormProvider>
        </div> 
    </div>
  )
}

export default SignUp