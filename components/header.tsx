'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import rdsCarcenterPic from '@/assets/images/header-foto.webp';

const Header = () => {
  const router = useRouter();

  const handleClick = (hash: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (window.location.hash === hash) {
      const element = document.querySelector(hash);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(hash);
      setTimeout(() => {
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }

  return (
    <header className='header'>
      <Image src={rdsCarcenterPic} alt="RDS Carcenter logo" style={{ display: 'block' }} />
      <nav>
        <Link href="#title-home" onClick={(e) => handleClick('#title-home', e)}>Home</Link>
        <Link href="#title-contact" onClick={(e) => handleClick('#title-contact', e)}>Contact</Link>
      </nav>
    </header>
  )
}

export default Header;
