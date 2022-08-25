import React from 'react';

const Main: React.FunctionComponent<IMainProps> = props => {
  const { children } = props;

  return (
    <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      {children}
    </div>
  );
};

export default Main;
