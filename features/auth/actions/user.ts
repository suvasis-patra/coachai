'use server'

import { z } from "zod"
import { RegisterUserSchema } from "../schema"
import { prisma } from "@/lib/prisma"
import { hashPassword } from "../lib/utils"

export const registerUser=async (data:z.infer<typeof RegisterUserSchema>)=>{
    const validatFields=RegisterUserSchema.safeParse(data)
    if(!validatFields.success){
        return {success:false,message:"Invalid input!"}
    }
    const {email,password,username}=validatFields.data
    const existingUser=await prisma.user.findFirst({
        where:{email}
    })
    if(existingUser){
        return {success:false,message:"Email already exist!"}
    }
    const hashedPassword= await hashPassword(password)
    try {
        await prisma.user.create({
            data:{
                username,
                email,
                password:hashedPassword
            }
        })
        return {success:true,message:"user registered!"}
    } catch (error) {
        console.log(error)
        return {success:false,message:"Something went wrong!"}
    }
}