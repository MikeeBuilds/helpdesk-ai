import { AuthContextProvider } from '@/context/use-auth-context'
import React from 'react'
import { FormProvider } from 'react-hook-form'

type Props = {
    children: React.ReactNode
}

const SignUpFormProvider = ({ children }: Props) => {
  const {methods, onHandleSubmit, loading } = 

  return (
    <AuthContextProvider>
        <FormProvider {...methods}></FormProvider>
    </AuthContextProvider>
  )
}

export default SignUpFormProvider