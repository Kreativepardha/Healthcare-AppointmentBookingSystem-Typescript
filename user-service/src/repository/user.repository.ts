import { PrismaClient, User } from "@prisma/client";
import { prisma } from "../config/db";



export const createUser = async (data: {name: string; email: string; password: string}) => {
    return prisma.user.create({ data })
}

export const findUserByEmail = async (email: string): Promise<User | null> => {
    return prisma.user.findUnique({
        where: {
            email
        }
    })
}