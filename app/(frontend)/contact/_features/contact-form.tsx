'use client';

import { z } from 'zod';

import { Card } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';

const contactSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters',
  }),
  email: z.string().email(),
  message: z.string().max(30, { message: 'Message must only be 30 character' }),
});

export const ContactForm = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (values: z.infer<typeof contactSchema>) => {
    console.log(values);
  };

  return (
    <Card className='p-4'>
      <div className=''>
        <p className='text-3xl text-sky-800 font-semibold mb-5'>
          Leave a message
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              name='name'
              control={form.control}
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <input
                      {...field}
                      placeholder='Name'
                      className='border border-slate-100 p-2 rounded-sm'
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='email'
              control={form.control}
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <input
                      {...field}
                      placeholder='example@mail.com'
                      className='border border-slate-100 p-2 rounded-sm'
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='message'
              control={form.control}
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <textarea
                      {...field}
                      placeholder='Your message'
                      className='border border-slate-100 p-2 rounded-sm'
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              variant='primary'
              className='w-full uppercase tracking-widest font-bold'
            >
              Send
            </Button>
          </form>
        </Form>
      </div>
    </Card>
  );
};
