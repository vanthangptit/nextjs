import * as React from 'react';
import Header from './Header';
import Footer from './Footer';

interface ILayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const spacingAside: string = 'pl-[20px] pr-[20px]';
  return (
    <div className="bg-gray-100 min-h-screen bg-white dark:bg-black h-[10000px]">
      <Header spacingAside={spacingAside} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
