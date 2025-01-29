'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
// import { Icons } from "@/components/icons"
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

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

const routeCopy = [
  {
    title: 'About',
    href: '#about',
    submenu: [
      {
        name: 'About Us',
        href: '/#about',
      },
      {
        name: 'Meet the Team',
        href: '/meet-the-team',
      },
      {
        name: 'FAQ',
        href: '/#faqs',
      },
      {
        name: 'Why choose us?',
        href: '/#why-choose-us',
      },
      {
        name: 'Testimonials',
        href: '/#testimonials',
      },
    ],
  },
  {
    name: 'Courses and Certification',
    href: '#courses',
    submenu: [
      {
        name: 'Introduction to Freediving',
        href: '/courses-and-certifications/introduction-to-freediving',
      },
      {
        name: 'Line Training',
        href: '/courses-and-certifications/line-training',
      },
      {
        name: 'Molchanovs Wave 1',
        href: '/courses-and-certifications/molchonovs-wave-1',
      },
      {
        name: 'Molchanovs Wave 2',
        href: '/courses-and-certifications/molchonovs-wave-2',
      },
    ],
  },
  {
    name: 'Freediving Tour Services',
    href: '#retreats',
    submenu: [
      {
        name: 'Freediving Tours',
        href: '/freediving-tour-services/coron-palawan',
        submenu: [
          {
            name: 'Coron Palawan, Philippines',
            href: '/freediving-tour-services/freediving-tours/coron-palawan-philippines',
          },
        ],
      },
      {
        name: 'Freediving Retreat',
        href: '/freediving-tour-services/freediving-retreat',
      },
      {
        name: 'Freediving Expeditions',
        href: '/freediving-tour-services/freediving-expeditions',
        submenu: [
          {
            name: 'Busuanga Freedive Expedition',
            href: '/freediving-tour-services/freediving-expeditions/busuanga-freedive-expedition',
          },
          {
            name: 'Apo Reef Freedive Expedition',
            href: '/freediving-tour-services/freediving-expeditions/apo-reef-freedive-expedition',
          },
        ],
      },
    ],
  },
  {
    name: 'Travel and Tour Services',
    href: '/travel-and-tour-services',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-4'>
                <NavigationMenuLink asChild>
                  <Link
                    className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                    href='/'
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    {/* <Home /> */}
                    <Image src='/logo.svg' height={50} width={150} alt='logo' />
                    <div className='mb-2 mt-4 text-lg font-medium'>
                      All&apos;in Freediving and Tour Services
                    </div>
                    <p className='text-sm leading-tight text-muted-foreground'>
                      Where Journeys Meet the Depths of Discovery.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>

              <ListItem href='/' title='Introduction'>
                hello
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {routeCopy.map((route) => (
          <NavigationMenuItem key={route.href}>
            <NavigationMenuTrigger>{route.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                {route.submenu?.map((menu) => (
                  <ListItem
                    key={menu.href}
                    href={menu.href}
                    title='Introduction'
                  >
                    {menu.name}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <li className='row-span-4'>
                <NavigationMenuLink asChild>
                  <Link
                    className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                    href='/'
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    {/* <Home /> */}
                    <Image src='/logo.svg' height={50} width={150} alt='logo' />
                    <div className='mb-2 mt-4 text-lg font-medium'>
                      All&apos;in Freediving and Tour Services
                    </div>
                    <p className='text-sm leading-tight text-muted-foreground'>
                      Where Journeys Meet the Depths of Discovery.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href='/docs' title='Introduction'>
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href='/docs/installation' title='Installation'>
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href='/docs/primitives/typography' title='Typography'>
                Styles for headings, paragraphs, lists...etc
              </ListItem>
              <ListItem href='/docs/primitives/typography' title='Typography'>
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/docs' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/docs' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/docs' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
