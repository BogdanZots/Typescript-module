import React, { FC } from "react";

export const Navbar: FC = () => {
  return (
    <div>
      <a href="#">React + Ts</a>
      <ul>
        <li>
          <a href='/'>Список дел</a>
        </li>
        <li>
          <a href='/'>Информация</a>
        </li>
      </ul>
    </div>
  );
};
