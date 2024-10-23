import * as React from 'react';

const ComponentMaxWidthScreen = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={"max-w-screen-lg m-auto"}>
      {children}
    </div>
  )
};

export default ComponentMaxWidthScreen;