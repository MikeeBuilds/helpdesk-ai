"use client";

import { AuthContextProvider } from '@/context/use-auth-context';
import { useSignInForm } from '@/hooks/sign-in/use-sign-in';
import React from 'react'
import { FormProvider } from 'react-hook-form';

type Props = {}

const SignInFormProvider = (props: Props) => {
    const { methods, onHandleSubmit, loading } = useSignInForm()
  return <AuthContextProvider>
    <FormProvider {...methods}>
        <form
          onSubmit={onHandleSubmit}
          className='h-full'
        >
         <div className='flex flex-col justify-between gap-3'>

         </div>
        </form>
    </FormProvider>
  </AuthContextProvider>
}

export default SignInFormProvider