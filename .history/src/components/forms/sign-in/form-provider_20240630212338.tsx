"use client";

import { useSignInForm } from '@/hooks/sign-in/use-sign-in';
import React from 'react'

type Props = {}

const SignInFormProvider = (props: Props) => {
    const { methods, onHandleSubmit, loading } = useSignInForm()
  return <Auth
}

export default SignInFormProvider