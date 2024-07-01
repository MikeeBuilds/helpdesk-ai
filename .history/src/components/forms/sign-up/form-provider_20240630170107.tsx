import { AuthContextProvider } from '@/context/use-auth-context'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const SignUpFormProvider = ({ children }: Props) => {
  return (
    <AuthContextProvider></AuthContextProvider>
  )
}

export default SignUpFormProvider