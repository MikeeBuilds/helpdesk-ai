import React from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {}

const RegistrationFormStep = (props: Props) => {
    const {
        register,
        formState: { errors },
        setValue,
    } = useFormContext()
    return (
        <div>RegistrationFormStep</div>
    )
}

export default RegistrationFormStep