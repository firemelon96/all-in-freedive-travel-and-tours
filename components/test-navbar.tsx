import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';
// import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const NavbarTest = () => {
  return (
    <nav className='bg-gray-900 text-white'>
      <div className='container mx-auto px-4 py-2 flex items-center justify-between'>
        {/* Logo */}
        <div className='text-xl font-bold'>Brand</div>

        {/* Primary Navigation */}
        <div className='hidden md:flex items-center space-x-6'>
          {/* Navigation Menu with Submenu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className='flex items-center'>
                  Services <ChevronDown className='ml-2 h-4 w-4' />
                </NavigationMenuTrigger>
                <NavigationMenuContent className='bg-gray-800 text-white p-4 rounded-md shadow-lg'>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className='flex items-center'>
                        Web Development <ChevronDown className='ml-2 h-4 w-4' />
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className='absolute left-full top-0 bg-gray-700 text-white p-4 rounded-md shadow-lg'>
                        <NavigationMenuList>
                          <NavigationMenuItem>
                            <NavigationMenuTrigger>
                              Frontend Development
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className='absolute left-full top-0 bg-gray-600 text-white p-4 rounded-md shadow-lg'>
                              <NavigationMenuList>
                                <NavigationMenuItem>React</NavigationMenuItem>
                                <NavigationMenuItem>Vue</NavigationMenuItem>
                                <NavigationMenuItem>Angular</NavigationMenuItem>
                              </NavigationMenuList>
                            </NavigationMenuContent>
                          </NavigationMenuItem>
                          <NavigationMenuItem>
                            Backend Development
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>SEO Services</NavigationMenuItem>
                    <NavigationMenuItem>Graphic Design</NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Other Links */}
          <a href='#about' className='hover:underline'>
            About
          </a>
          <a href='#contact' className='hover:underline'>
            Contact
          </a>
        </div>

        {/* Mobile Menu */}
        <div className='md:hidden'>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                <NavigationMenuContent className='bg-gray-800 text-white p-4 rounded-md shadow-lg'>
                  <NavigationMenuList>
                    <NavigationMenuItem>Services</NavigationMenuItem>
                    <NavigationMenuItem>About</NavigationMenuItem>
                    <NavigationMenuItem>Contact</NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTest;
