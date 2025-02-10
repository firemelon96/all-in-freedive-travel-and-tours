'use client';

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
import { useTransition } from 'react';
import { bookAction } from '@/app/actions/book-action';
import { contactSchema, schemaTypes } from '@/types';
import { toast } from 'sonner';

export const ContactForm = () => {
  const [isPending, startTransition] = useTransition();
  const form = useForm<schemaTypes>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (values: schemaTypes) => {
    startTransition(() => {
      bookAction(values)
        .then((data) => {
          toast.success(data.message);
          form.reset();
        })
        .catch((err) => {
          toast.error(err.message);
          form.reset();
        });
    });
  };

  return (
    <Card className='p-4'>
      <div className=''>
        <p className='text-xl text-sky-800 font-semibold mb-5'>
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
                      disabled={isPending}
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
                      disabled={isPending}
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
                      disabled={isPending}
                      {...field}
                      placeholder='Your message'
                      className='border border-slate-100 p-2 rounded-sm'
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              disabled={isPending}
              variant='primary'
              className='w-full uppercase tracking-widest font-bold'
            >
              {isPending ? 'Sending...' : 'Send'}
            </Button>
          </form>
        </Form>
      </div>
    </Card>
  );
};
