'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  email: z.string().email()
})


const AuthForm = ({type}: {type: string}) => {
  const [user, setUser] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: "",
      password:'0'
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof authFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setisLoading(true)
    console.log(values)
    setisLoading(false)
  }

  return (
    <section className="auth-form">
      <header>
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>
        <div className=" flex flex-col gap-1 md:gap-3">
          <h1 className=" text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* PlaidLink*/}</div>
      ) : (
        <>
        
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <CustomInput name="email" placeholder="Please enter your email" label="Email" control={form.control} />

              <CustomInput name="password" placeholder="Please enter your password" label='Password' control={form.control} />

              <Button type="submit" className='form-btn' disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 size={20} className='animate-spin' /> &nbsp;
                    Loading...
                  </>
                ): type === 'sign-in'? 'Sign In' : 'Sign Up'}
              </Button>
            </form>
          </Form>

          

        </>
      )}
    </section>
  );
}

export default AuthForm
