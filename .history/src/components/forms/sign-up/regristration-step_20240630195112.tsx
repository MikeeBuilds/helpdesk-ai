import { useAuthContextHook } from '@/context/use-auth-context'
import React from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {}

const RegistrationFormStep = (props: Props) => {
    const {
        register,
        formState: { errors },
        setValue,
    } = useFormContext()
    const { currentStep } = useAuthContextHook()
    const [onOTP, ]
    return (
        <div>RegistrationFormStep</div>
    )
}

export default RegistrationFormStep