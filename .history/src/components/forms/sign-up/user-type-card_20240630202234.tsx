"use client"

import { Label } from '@/components/ui/label'
import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
    value: string
    title: string
    text: string
    register: UseFormRegister<FieldValues>,
    userType: 'owner' | 'student',
    setUserType: React.Dispatch<React.SetStateAction<'owner' | 'student'>>,
}

const UserTypeCard = ({
    register,
    setUserType,
    text,
    title,
    userType,
    value,
}: Props) => {
    return (
        <Label htmlFor={value}></Label>
    )
}

export default UserTypeCard