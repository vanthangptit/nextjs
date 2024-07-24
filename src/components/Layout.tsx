import * as React from 'react';
import { LayoutProps } from '@refinedev/core';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const spacingAside: string = 'pl-[20px] pr-[20px]';
  return (
    <div className="bg-gray-100 min-h-screen bg-white dark:bg-black h-[10000px]">
      <div className={"max-w-screen-lg m-auto " + spacingAside}>
        <Header spacingAside={spacingAside} />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
