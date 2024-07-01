'use Client'

import { useAuthContextHook } from '@/context/use-auth-context'
import React from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {}

const ButtonHandler = (props: Props) => {
    const { setCurrentStep, currentStep } = useAuthContextHook()
  const { formState, getFieldState, getValues } = useFormContext()
  return (
    <div>ButtonHandler</div>
  )
}

export default ButtonHandler