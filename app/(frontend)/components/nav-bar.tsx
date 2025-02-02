'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { menuItems } from '@/lib/routes';
import Image from 'next/image';
import { useClickAway } from '@uidotdev/usehooks';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleSubmenu = (name: string) =>
    setOpenSubmenu(openSubmenu === name ? null : name);

  const ref = useClickAway(() => {
    setOpenSubmenu(null);
  });

  const MobileNavItem = ({
    item,
    depth = 0,
  }: {
    item: (typeof menuItems)[0];
    depth?: number;
  }) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;

    return (
      <div className={`${depth > 0 ? 'ml-4' : ''}`}>
        {hasSubmenu ? (
          <div>
            <button
              onClick={() => toggleSubmenu(item.name)}
              className='w-full flex items-center justify-between px-3 py-2 text-base font-medium text-sky-700 rounded-md hover:bg-gray-100 hover:text-sky-900'
              aria-expanded={openSubmenu === item.name}
            >
              {item.name}
              <ChevronDown className='w-4 h-4 ml-1' />
            </button>
            {openSubmenu === item.name && (
              <div className='mt-2 space-y-2'>
                {item.submenu.map((subitem) => (
                  <MobileNavItem
                    key={subitem.name}
                    item={subitem}
                    depth={depth + 1}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className='block px-3 py-2 text-base font-medium text-sky-700 rounded-md hover:bg-gray-100 hover:text-sky-900'
          >
            {item.name}
          </Link>
        )}
      </div>
    );
  };

  const NavItem = ({
    item,
    depth = 0,
  }: {
    item: (typeof menuItems)[0];
    depth?: number;
  }) => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const [isHovered, setIsHovered] = useState(false);

    return (
      <li
        className={`relative group ${depth > 0 ? 'w-full' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {hasSubmenu ? (
          <button
            onClick={() => depth === 0 && toggleSubmenu(item.name)}
            className={`flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-sky-700 rounded-md hover:bg-gray-100 hover:text-sky-900 ${
              depth > 0 ? 'pl-6' : ''
            }`}
            aria-expanded={depth === 0 ? openSubmenu === item.name : isHovered}
            aria-haspopup='true'
          >
            {item.name}
            <ChevronDown
              className={`w-4 h-4 ml-1 ${depth > 0 ? 'rotate-[-90deg]' : ''}`}
            />
          </button>
        ) : (
          <Link
            href={item.href}
            onClick={() => setOpenSubmenu(null)}
            className={`block w-full px-3 py-2 text-sm font-medium text-sky-700 rounded-md hover:bg-gray-100 hover:text-sky-900 ${
              depth > 0 ? 'pl-6' : ''
            }`}
          >
            {item.name}
          </Link>
        )}
        {hasSubmenu && (
          <ul
            className={`z-50 ${
              depth === 0
                ? 'absolute left-0 mt-2'
                : 'absolute left-full top-0 mt-0'
            } space-y-2 bg-white border border-gray-200 rounded-md shadow-lg ${
              depth === 0
                ? openSubmenu === item.name
                  ? 'block'
                  : 'hidden'
                : isHovered
                ? 'block'
                : 'hidden'
            } min-w-[200px]`}
          >
            {item.submenu!.map((subitem) => (
              <NavItem key={subitem.name} item={subitem} depth={depth + 1} />
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <nav className='bg-white shadow sticky top-0 z-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-14'>
          <div className='flex'>
            <div className='flex-shrink-0 flex items-center'>
              <Link href='/' className='text-xl font-bold text-gray-800'>
                <Image
                  src='/logo-real.png'
                  height={80}
                  width={150}
                  alt='logo'
                />
              </Link>
            </div>
          </div>
          <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
            <ul className='flex space-x-4 items-center'>
              {menuItems.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </ul>
          </div>
          <div className='flex items-center sm:hidden'>
            <Button
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls='mobile-menu'
              variant='ghost'
            >
              <span className='sr-only'>Open main menu</span>
              {isMobileMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        id='mobile-menu'
      >
        <div className='px-2 pt-2 pb-3 space-y-1'>
          {menuItems.map((item) => (
            <MobileNavItem key={item.name} item={item} />
          ))}
        </div>
      </div>
    </nav>
  );
}
