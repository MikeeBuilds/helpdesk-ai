import { useAuthContextHook } from '@/context/use-auth-context'
import React, { useState} from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {}

const RegistrationFormStep = (props: Props) => {
    const {
        register,
        formState: { errors },
        setValue,
    } = useFormContext()
    const { currentStep } = useAuthContextHook()
    const [onOTP, setOnOTP] = useState<string>('')
    const [onUserType, setOnUserType] = useState<'owner' | 'student'>('owner')

    setValue('otp', onOTP)

    switch (currentStep){
        case 1:
            return (
                
            )
        case 2:
        case 3:
    }

    return (
        <div>RegistrationFormStep</div>
    )
}

export default RegistrationFormStep