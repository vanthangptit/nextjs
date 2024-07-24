'use client'

import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import Navbar from './Navbar';

let IS_FIXED: boolean = false;
let SCROLL_Y: number = 0;
const padding: number = 15;

const Header = ({ spacingAside }: { spacingAside?: string }) => {
  const [positionLayer, setPositionLayer] = useState<string>('');
  const [firstRun, setFirstRun] = useState<boolean>(false);
  const [spacing, setSpacing] = useState<string>('');

  const scrollHandler = useCallback(() => {
    if (SCROLL_Y > window.scrollY) { // Scroll up
      if (window.scrollY === 0) {
        IS_FIXED = false;
        setPositionLayer('relative');
        setSpacing('');
      }
    } else { // Scroll down
      if (window.scrollY > 85) {
        if (!IS_FIXED) {
          IS_FIXED = true;
          setPositionLayer(`fixed animate-nav-scroll p-[${padding}px] bg-white shadow-lg`);
          setSpacing(spacingAside ?? '');
        }
      }
    }

    setFirstRun(true);
    SCROLL_Y = window.scrollY;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    }
  }, []);

  useEffect(() => {
    if (!firstRun) scrollHandler();
  }, [firstRun]);

  return (
    <header
      className={`max-w-screen-lg pt-[${padding}px] pb-[${padding}px] h-[85px]`}
    >
      <div className={positionLayer + ' top-[0px] left-[0px] w-full flex item-center h-[85px]'}>
        <div className={'max-w-screen-lg m-auto w-full' + spacing}>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
