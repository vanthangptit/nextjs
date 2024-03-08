import React, { Fragment } from 'react';
import Header from './components/Header';
import SearchSideBar from './components/SearchSideBar';
import RestaurantCard from './components/RestaurantCard';

const Search = () => {
  return (
    <Fragment>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <div className="w-1/5">
          <SearchSideBar />
        </div>
        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </Fragment>
  );
};

export default Search;