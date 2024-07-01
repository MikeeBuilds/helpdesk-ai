"use client"

import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
    value: string
    title: string
    text: string
    register: UseFormRegister<FieldValues>,
    userTye: 'owner' |'student',
    setUserType: React.Dispatch<React.SetStateAction<'owner' |'student'>>,
}

const UserTypeCard = ({
    register,
    setUserType
}: Props) => {
  return (
    <div>UserTypeCard</div>
  )
}

export default UserTypeCard