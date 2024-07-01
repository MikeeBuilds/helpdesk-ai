import React from 'react'

type Props = {}

const RegistrationFormStep = (props: Props) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useForm

  return (
    <div>RegistrationFormStep</div>
  )
}

export default RegistrationFormStep