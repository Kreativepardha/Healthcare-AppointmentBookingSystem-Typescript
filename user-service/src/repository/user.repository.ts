import { PrismaClient, User } from "@prisma/client";


const prisma  = new PrismaClient();

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