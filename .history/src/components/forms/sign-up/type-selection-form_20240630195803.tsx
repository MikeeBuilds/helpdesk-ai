import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
    register: UseFormRegister<FieldValues>
}

const TypeSelectionForm = (props: Props) => {
  return (
    <div>TypeSelectionForm</div>
  )
}

export default TypeSelectionForm