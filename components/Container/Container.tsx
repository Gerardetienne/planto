import React from 'react';
type ContainerProps = {
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
  size?: string;
};

const Container = ({ children, size }: ContainerProps) => {
  const widhtDynamic = size ? size : 'mx-2 md:mx-auto max-w-screen-3xl ';

  return <div className={`${widhtDynamic}`}>{children}</div>;
};

export default Container;
