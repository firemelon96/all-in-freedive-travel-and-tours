'use server';

import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

interface Props {
  location?: string;
  price?: string;
  duration?: string;
  certification?: string;
  title?: string;
}

const resend = new Resend(process.env.RESEND_API);

export const bookAction = async (data: Props) => {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      return { error: 'failed' };
    }

    return {
      success: true,
    };
  } catch (error) {}
};
