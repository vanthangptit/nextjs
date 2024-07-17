'use client'

import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState<boolean>();
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <nav>
      <Link href={"/"}>
        <h1 className="logo">ThangNguyen</h1>
      </Link>
      <div onClick={() => setNavActive(!navActive)} />
      <div>
        {MENU_LIST.map((menu, idx) => (
          <div
            onClick={() => {
              setActiveIdx(idx);
              setNavActive(false);
            }}
            key={menu.text}
          >
            <NavItem active={activeIdx === idx} {...menu} />
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;