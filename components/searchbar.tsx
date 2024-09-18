"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import { toast } from "@/components/ui/use-toast"
import { Search } from "lucide-react"

const FormSchema = z.object({
  search: z.string().min(2, {
    message: "Could not find any results.",
  }),
})

export function SearchField() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      search: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2  w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="border-[1px] p-1 text-white mt-10 sm:mt-5 bg-[#000000]  border-[#2d2d2d] flex items-center rounded-full ">
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" className="w-72 text-[16px]" placeholder="Search a company" {...field} />
              </FormControl>
              <FormMessage className="absolute left-1/2 -translate-x-1/2 " />
            </FormItem>
          )}
        />
        <button className="text-sm outline-none px-3" type="submit">
        <Search size={21} className="hover:text-slate-50 text-[#a7a7a7]" />
        </button>
      </form>
    </Form>
  )
}
