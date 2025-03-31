'use client';

import * as React from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'usehooks-ts';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import { menuItems } from '@/lib/routes';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function NavigationBar() {
  const [open, setOpen] = React.useState(false);
  const matches = useMediaQuery('(min-width: 768px)');

  const onClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (matches) {
      onClose();
    }
  }, [matches]);

  return (
    <header className='bg-white sticky top-0 z-50 p-1 shadow-sm'>
      <div className='flex items-center container mx-auto justify-between'>
        <div className='relative h-10 w-24'>
          <Image src={'/logo-real.png'} fill alt='All in Freediving Logo' />
        </div>
        {/* mobile navigation */}
        <Sheet open={open} onOpenChange={onClose}>
          <Button
            onClick={() => setOpen(true)}
            variant={'secondary'}
            className='md:hidden'
          >
            <Menu />
          </Button>
          <SheetContent className='px-0'>
            <SheetTitle></SheetTitle>
            <nav className='w-full'>
              <Accordion type='multiple'>
                {menuItems.map((item, index) =>
                  item.submenu ? (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className='text-base text-sky-700 hover:text-sky-800 font-semibold'>
                        {item.name}
                      </AccordionTrigger>
                      <AccordionContent className='space-y-2 text-center'>
                        {item.submenu.map((sub, subIndex) => (
                          <Link
                            onClick={onClose}
                            key={subIndex}
                            href={sub.href}
                            className='block text-sm text-sky-700 hover:text-sky-800/90'
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
                      onClick={onClose}
                      className='block text-base text-center font-semibold text-sky-700 hover:text-sky-800 py-2'
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </Accordion>
            </nav>
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>

        <NavigationMenu className='hidden md:block'>
          <NavigationMenuList>
            {menuItems.map((menu) => (
              <NavigationMenuItem key={menu.name}>
                {menu.submenu ? (
                  <>
                    <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                        {menu.submenu.map((submenu) => (
                          <ListItem
                            key={submenu.name}
                            title={submenu.name}
                            href={submenu.href}
                          >
                            {submenu.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link href={menu.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {menu.name}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-sky-800 focus:bg-accent focus:text-sky-800',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-sky-700/70'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
