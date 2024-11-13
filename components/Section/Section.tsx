import React from 'react';
type ContainerProps = {
  children?: JSX.Element | JSX.Element[];
  size?: string;
};

const Section = ({ children, size }: ContainerProps) => {
  const widhtDynamic = size ? size : 'mx-auto max-w-screen-2xl';

  return <div className={`${widhtDynamic} `}>{children}</div>;
};

export default Section;