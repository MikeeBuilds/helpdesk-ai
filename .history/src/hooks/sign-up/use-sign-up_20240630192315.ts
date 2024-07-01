import { useToast } from "@/components/ui/use-toast"
import { UserRegistrationProps, UserRegistrationSchema } from "@/schemas/auth.schema"
import { SignUp, useSignUp } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import{ zodResolver } from "@hookform/resolvers/zod"
import { EmailAddress } from "@clerk/nextjs/server"

export const useSignUpForm = () => {
    const { toast } = useToast()
    const [loading, setLoading] = useState<boolean>(false)
    const { signUp, isLoaded, setActive } = useSignUp()
    const router = useRouter()
    const methods = useForm<UserRegistrationProps>({
        resolver: zodResolver(UserRegistrationSchema),
        defaultValues: {
            type: "owner",
        },
        mode: 'onChange'
    })
    
    const onGenerateOTP = async (
        email: string,
        password: string,
        onNext: React.Dispatch<React.SetStateAction<number>>,
    ) => {
        if(!isLoaded) return
        try {
            await signUp.create({
                emailAddress: email,
                password: password,
            })
            
            await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
            
            onNext((prev) => prev + 1)
        } catch (error: any) {
            toast({
                title: 'Error',
                description: error.errors[0].message
            })
        }
    }

    const onHandleSubmit = methods.handleSubmit(
        async (values: UserRegistrationProps) => {
            if (!isLoaded) return
            try{
                setLoading(true)
                const CompleteSignUp = await signUp.attemptEmailAddressVerification({
                    code: values.otp,
                })

                if (CompleteSignUp.status !== 'complete') {
                 return { message: 'Something went wrong!' }
                }
            }
        }
    )
}