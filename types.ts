import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters',
  }),
  email: z.string().email(),
  message: z.string().max(30, { message: 'Message must only be 30 character' }),
});

export type schemaTypes = z.infer<typeof contactSchema>;
