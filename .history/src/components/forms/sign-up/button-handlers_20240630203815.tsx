'use Client'

import { useAuthContextHook } from '@/context/use-auth-context'
import React from 'react'

type Props = {}

const ButtonHandler = (props: Props) => {
  const { setCurrentStep, curr } = useAuthContextHook()

  return (
    <div>ButtonHandler</div>
  )
}

export default ButtonHandler