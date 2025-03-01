import * as z from "zod"
import { REQUIRED_MESSAGE } from "../lib/constants"

export const RegisterUserSchema=z.object({
    username:z.string({required_error:REQUIRED_MESSAGE}).min(1,REQUIRED_MESSAGE),
    email:z.string({required_error:REQUIRED_MESSAGE}).email({message:"Enter a valid email!"}),
    password:z.string({required_error:REQUIRED_MESSAGE}).min(1,REQUIRED_MESSAGE).min(6,"Too short password!")
})

export const LoginUserSchema=z.object({
    email:z.string({required_error:REQUIRED_MESSAGE}).email({message:"Enter a valid email!"}),
    password:z.string({required_error:REQUIRED_MESSAGE}).min(1,REQUIRED_MESSAGE).min(6,"Too short password!")
})