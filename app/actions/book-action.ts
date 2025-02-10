'use server';

import EmailTemplate from '@/emails/email-template';
import { contactSchema, schemaTypes } from '@/types';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API);

export const bookAction = async (values: schemaTypes) => {
  const validatedFields = contactSchema.safeParse(values);

  if (!validatedFields.success) {
    return { success: false, message: 'Invalid Fields' };
  }

  const { email, message, name } = validatedFields.data;

  try {
    const { data, error } = await resend.emails.send({
      from: 'All In Freediving and Tour Services <sales@allinfreedivingandtourservices.com>',
      to: [email],
      subject: 'Inquiry message',
      react: EmailTemplate({ message, name, email }),
      cc: ['allinfreedivingandtourservices@gmail.com'],
    });

    console.log(data);

    if (error) {
      return { error: 'failed' };
    }

    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    return { success: false, error };
  }
};
