'use Client'

import React from 'react'

type Props = {}

const ButtonHandler = (props: Props) => {
  const { setCurrentStep, currentStep } = useAuth

  return (
    <div>ButtonHandler</div>
  )
}

export default ButtonHandler