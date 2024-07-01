"use server";

import { client } from "@/lib/prisma";

export const onCompleteUserRegistration = async (
    fullname: string,
    clerkId: string,
    type: string,
) => {
    try {
        const registered = await Client.user.create({
            data:
        })
    }
}