import { useToast } from "@/components/ui/use-toast"
import { useSignUp } from "@clerk/nextjs"
import { useState } from "react"

export const useSignUpForm = () => {
    const { toast } = useToast()
    const [loading, setLoading] = useState<boolean>(false)
    const { signUp, isLoaded, setActive } = useSignUp()
    const router = useRouter()
}