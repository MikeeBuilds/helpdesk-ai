"use server";

import { client } from "@/lib/prisma";
import { create } from "domain";

export const onCompleteUserRegistration = async (
    fullname: string,
    clerkId: string,
    type: string,
) => {
    try {
        const registered = await Client.user.create({
            data: {
                fullname,
                clerkId,
                type,
                subscriptions: {
                    create: {},
                },
            },
            select: {
                fullname: true,
                id
            }
        })
    }
}