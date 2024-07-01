"use client"

import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
    value: string
    title: string
    text: string
    register: UseFormRegister<FieldValues>,
    userTye:
}

const UserTypeCard = (props: Props) => {
  return (
    <div>UserTypeCard</div>
  )
}

export default UserTypeCard