'use client'

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import themeLoad from '../../public/theme-loading.svg';
import lightMode from '../../public/light-mode.svg';
import darkMode from '../../public/dark-mode.svg';

export default function ThemeSwitcher() {
  const [ mounted, setMounted ] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Image src={themeLoad} width={25} height={25} sizes='25x25' alt='Loading theme' priority={false} title='Loading theme' />
    );
  }

  return (
    <Image
      className=' ml-11 hover:cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-300'
      src={resolvedTheme === 'dark' ? lightMode : darkMode}
      width={25}
      height={25}
      alt={resolvedTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      sizes='60x60' 
      priority={true}
    />
  );
}
