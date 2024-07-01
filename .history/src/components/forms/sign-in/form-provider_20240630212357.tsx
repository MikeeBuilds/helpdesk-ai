"use client";

import { AuthContextProvider } from '@/context/use-auth-context';
import { useSignInForm } from '@/hooks/sign-in/use-sign-in';
import React from 'react'

type Props = {}

const SignInFormProvider = (props: Props) => {
    const { methods, onHandleSubmit, loading } = useSignInForm()
  return <AuthContextProvider>
    <Form
  </AuthContextProvider>
}

export default SignInFormProvider