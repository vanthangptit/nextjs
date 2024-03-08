import React, { Fragment } from 'react';
import Header from './components/Header';
import Form from './components/Form';

const Reserve = () => {
  return (
    <Fragment>
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          <Header />
          <Form />
        </div>
      </div>
    </Fragment>
  );
};

export default Reserve;