import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import UserTypeCard from './user-type-card'

type Props = {
    register: UseFormRegister<FieldValues>,
    userType: 'owner' |'student',
    setUserType: React.Dispatch<React.SetStateAction<'owner' |'student'>>,
}

const TypeSelectionForm = ({ register, setUserType, userType }: Props) => {
  return (
    <>
     <h2 className='text-gravel md:text-4xl font-bold'>Create an account</h2>
     <p className='text-iridium md:text-sm'>
      Tell us about yourself! Whats do you do? Lets tailor your
      <br /> experience so it best suits you.
     </p>
     <UserTypeCard 
       register={register}
       setUserType={setUserType}
       userType={userType}
       value='owner'
       title='I own a business'
       text='I am a business owner and want to create a profile for my business.'
     ></UserTypeCard>
    </>
  )
}

export default TypeSelectionForm