'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { RegisterUserSchema } from "../schema"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import SocialAuthButtons from "../components/social-auth-buttons"
import { AuthPage } from "../lib/constants"
import Link from "next/link"
const RegisterForm = () => {
    const form = useForm<z.infer<typeof RegisterUserSchema>>({
        resolver: zodResolver(RegisterUserSchema),
        defaultValues: {
          username: "",
          email:"",
          password:""
        },
      })
     
      async function onSubmit(values: z.infer<typeof RegisterUserSchema>) {
        console.log(values)
      }
  return (
    <Form {...form}>
      <div className="flex flex-col items-center mb-10">
        <h3 className="font-semibold text-2xl">Welcome to Coach<span className="text-blue-700">AI</span></h3>
      </div>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="input-lable">Username</FormLabel>
            <FormControl>
              <Input placeholder="Jhon doe" {...field}  className="input-field"/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="input-lable">Email</FormLabel>
            <FormControl>
              <Input placeholder="example@gmail.com" type="email" {...field}  className="input-field"/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="input-lable">Password</FormLabel>
            <FormControl>
              <Input placeholder="******" type="password" {...field}  className="input-field"/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div>
       <Button type="submit" className="cta-btn bg-blue-700 hover:bg-blue-500 transition duration-200">register</Button>
      </div>
      <p className="text-center">Already have an account? <Link href={"/login"} className="underline text-blue-700">login here</Link></p>
    </form>
    <Separator className="my-4"/>
    <SocialAuthButtons path={AuthPage.REGISTER}/>
  </Form>
  )
}

export default RegisterForm