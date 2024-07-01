"use client"

import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
    value: string
    title: string
    text: string
    regoster: UseFormRegister<FieldValues>,
}

const UserTypeCard = (props: Props) => {
  return (
    <div>UserTypeCard</div>
  )
}

export default UserTypeCard