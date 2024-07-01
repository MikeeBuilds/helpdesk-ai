import { currentUser } from '@clerk/nextjs'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const user = await currentUser();

  if(user) redirect('/');
  return (
    <div className='h-screen flex w-full justify-center'>
        <div className='w-[600px] ld:w-full flex flex-col items-start p-6'>
          <Image
            src="/images/logo.png"
            alt='LOGO'
            width={100}
            height={100}
            sizes="100vw"
            style={{
                width: '20%',
                height: 'auto',
            }}
          />
          {children}
        </div>
        <div className='hidden lg:flex flex-1 w-full max-h-full max-w-400px overflow-hidden relative bg-cream flex-col pt-10 pl-24 gap-3'>
           <h2 className='text-gravel md:text-4xl font-bold'>
            HI, Im you AI powered sales assistant, Corinna!
           </h2>
           <p className='text-iridium md:text-sm mb-10'>
            Corinna is capable of capturing lead information without a form...{''}
           </p>
           <Image
            src="/images/app-ui.png"
            alt='App Image'
            loading='lazy'
            sizes='30'
            className='absolute shrink-0 !w-[1600px] top-48'
            width={0}
            height={0}
           />
           <br />
           Something never done before 😉
        </div>
    </div>
  )
}

export default Layout