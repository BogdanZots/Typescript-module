import React, { FC, useState } from "react";

type PropTypes = {
  title?: string;
  children?: never; // если в наш компонент нельзя передавать child
};

export const Header: FC<PropTypes> = ({ title }: PropTypes) => {
  const [counter, setCounter] = useState<number>(0);
  const incr = (): void => {
    setCounter((prevCounter : number) => prevCounter + 1);
  };
  const decr = (): void => {
    setCounter((prevCounter : number) => prevCounter - 1);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <h2>{counter.toFixed()}</h2>
    </div>
  );
};

Header.defaultProps = {
  title: "Hello",
};
