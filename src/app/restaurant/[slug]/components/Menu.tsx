import React from 'react';
import MenuCard from './MenuCard';

const Menu = () => {
  return (
    <div>
      <div className="mt-4 pb-1 mb-1">
        <h1 className="font-bold text-4xl">Menu</h1>
      </div>
      <div className="flex flex-wrap justify-between">
        <MenuCard />
      </div>
    </div>
  );
};

export default Menu;