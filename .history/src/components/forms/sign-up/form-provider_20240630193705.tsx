import { AuthContextProvider } from '@/context/use-auth-context'
import { useSignUpForm } from '@/hooks/sign-up/use-sign-up'
import React from 'react'
import { FormProvider } from 'react-hook-form'

type Props = {
    children: React.ReactNode
}

const SignUpFormProvider = ({ children }: Props) => {
  const {methods, onHandleSubmit, loading } = useSignUpForm();

  return (
    <AuthContextProvider>
        <FormProvider {...methods}>
            
        </FormProvider>
    </AuthContextProvider>
  )
}

export default SignUpFormProvider