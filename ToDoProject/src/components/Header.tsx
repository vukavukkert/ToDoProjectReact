import React from "react";

interface Props {
  children: string;
}

const Header = ({ children }: Props) => {
  return (
    <div className="flex-center-container">
      <h1 className="header-text">{children}</h1>
    </div>
  );
};

export default Header;
