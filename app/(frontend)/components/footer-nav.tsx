import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { menuItems } from '@/lib/routes';
import Link from 'next/link';

export const FooterNav = () => {
  return (
    <nav className='w-full max-w-md mx-auto'>
      <Accordion type='multiple' className='space-y-1'>
        {menuItems.map((item, index) =>
          item.submenu ? (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className='text-base font-medium text-white'>
                {item.name}
              </AccordionTrigger>
              <AccordionContent className='space-y-2 pl-4'>
                {item.submenu.map((sub, subIndex) => (
                  <Link
                    key={subIndex}
                    href={sub.href}
                    className='block text-sm text-white/60 hover:text-white/90'
                  >
                    {sub.name}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          ) : (
            <Link
              key={index}
              href={item.href}
              className='block text-base font-medium text-white hover:text-gray-700 py-2'
            >
              {item.name}
            </Link>
          )
        )}
      </Accordion>
    </nav>
  );
};
