"use server";

import { client } from "@/lib/prisma";

export const onCompleteUserRegistration = async (
    fullname: string,
    clerk
)