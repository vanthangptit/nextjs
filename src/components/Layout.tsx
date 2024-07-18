import * as React from 'react';
import { LayoutProps } from '@refinedev/core';
import Header from "./Header";
import Footer from "./Footer";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-gray-100 min-h-screen bg-white dark:bg-black">
      <div className="max-w-screen-lg m-auto">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};
