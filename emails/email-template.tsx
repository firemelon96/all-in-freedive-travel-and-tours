import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface VercelInviteUserEmailProps {
  name?: string;
  email?: string;
  message?: string;
}

export const VercelInviteUserEmail = ({
  name,
  email,
  message,
}: VercelInviteUserEmailProps) => {
  const previewText = `Travel Beyond Limits, Dive Beyond Depths.`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className='bg-white my-auto mx-auto font-sans px-2'>
          <Container className='border border-solid border-[#eaeaea] rounded my-10 mx-auto p-[20px] max-w-[465px]'>
            <Section className='mt-6'>
              <Img
                src='https://res.cloudinary.com/dutkzg9la/image/upload/v1739190405/logo-real_yyuwqf.png'
                width='190'
                height='65'
                alt='All in freediving and tour services logo'
                className='my-0 mx-auto'
              />
            </Section>
            <Heading className='text-black text-[24px] font-normal text-center p-0 my-5 mx-0'>
              Thank you for sending your inquiry <strong>{name}</strong>
            </Heading>
            <Text className='text-black bg-slate-50 p-4 text-[14px] leading-[24px]'>
              <strong>Your message :</strong> {message}
            </Text>
            <Text className='text-sm text-slate-500 text-center'>
              One of our agent will get back to you within 24hrs. {email}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VercelInviteUserEmail;
