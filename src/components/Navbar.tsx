'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import NavItem from './NavItem';
import Toggler from './Toggler';

const MENU_LIST = [
  { text: "Create Post", href: "/create-post" },
  { text: "Login", href: "/auth/login" },
];

const Navbar = () => {
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <nav className={'flex w-full gap-[20px] flex-nowrap items-center'}>
      <Link href={"/"}>
        <Image
          src={'/logo/logo.png'}
          alt={'logo'}
          width={45}
          height={45}
          pripority
        />
      </Link>
      <ul className={'flex flex-auto gap-[10px] justify-end'}>
        {MENU_LIST.map((menu, idx) => (
          <li
            onClick={() => setActiveIdx(idx)}
            key={menu.text}
            className={`${activeIdx === idx ? "active" : ""}`}
          >
            <NavItem active={activeIdx === idx} {...menu} />
          </li>
        ))}
      </ul>
      <div className={'flex items-center'}>
        <Toggler />
      </div>
    </nav>
  );
};

export default Navbar;