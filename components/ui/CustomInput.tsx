import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { Control, FieldPath } from 'react-hook-form'
import {z} from 'zod'
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-up');

interface CustomInput{
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string

}

const CustomInput = ({control, placeholder, name, label}: CustomInput) => {
  return (
    <FormField
                control={control}
                name={name}
                render={({ field }) => (
                 <div className='form-item'>
                    <FormLabel className='form-label'>
                      {label}
                    </FormLabel>
                    <div className='flex w-full flex-col'>
                      <FormControl>
                        <Input 
                        className='input-class' 
                        placeholder={placeholder}
                        type={name==='password' ? 'password' : 'text'}
                        {...field}/>
                      </FormControl>
                      <FormMessage
                      className='form-message mt-2'/>
                    </div>
                 </div>
                )}
              />
  )
}

export default CustomInput
