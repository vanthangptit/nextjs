import React, { Fragment } from 'react';
import Header from '../components/Header';
import RestaurantNavBar from '../components/RestaurantNavBar';
import Menu from '../components/Menu';

const RestaurantMenu = () => {
  return (
    <Fragment>
      <Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[100%] rounded p-3 shadow">
          <RestaurantNavBar />
          <main className="bg-white mt-5">
            <Menu />
          </main>
        </div>
      </div>
    </Fragment>
  );
};

export default RestaurantMenu;