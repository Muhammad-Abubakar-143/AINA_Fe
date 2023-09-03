'use client'
import * as z from 'zod'
import Heading from "@/components/Heading"
import { MessageSquare } from "lucide-react"
import { useForm } from "react-hook-form"
import { formShema } from './constants'
import {zodResolver} from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ChatCompletionRequestMessage } from 'openai'


const ConversationPage = () => {
    const form = useForm<z.infer<typeof formShema>>({
        resolver: zodResolver(formShema),
        defaultValues:{
            prompt:''
        }
    });
    const router = useRouter();
    const [messeges, setMesseges] = useState<ChatCompletionRequestMessage[]>([])
    const isLoading = form.formState.isSubmitting;
    const onSubmit = async(values:z.infer<typeof formShema>)=>{
        try{
          const userMessege : ChatCompletionRequestMessage = {
            role:'user',
            content: values.prompt,
          };
          const newMesseges = [...messeges, userMessege];
          const response = await axios.post("/api/conversation", {
            messeges: newMesseges,
          });
          setMesseges((current)=> [...current, userMessege, response.data]);
          form.reset();

        }catch(error:any){
          console.log(error)
        }
        finally{
          router.refresh()
        }
    }
  return (
    <div>
        <Heading
        title="Conversation" 
        description="Our Simple Conversation Model"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
        />

        <div className="px-4 lg:px-8">
            <div>
            <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="
                rounded-lg 
                border 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading} 
                        placeholder="How do I calculate the radius of a circle?" 
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="bg-violet-500/10 text-violet-500 hover:bg-violet-500 hover:text-violet-100 col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
                Generate
              </Button>
            </form>
          </Form>
            </div>
            <div className='mt-4 space-y-4'>
              <div className='flex flex-col-reverse gap-y-4'>
                {messeges.map((messege)=>(
                  <div key={messege.content}>
                    {messege.content}
                  </div>
                ))}

              </div>
            </div>
        </div>
    </div>
  )
}

export default ConversationPage