import React from "react";
import { getKeys } from "../../utils";
import { cocktailEnum } from "../../types";
import { Link } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
}

export const Header: React.FC<Props> = ({ children }) => {
  return (
    <div className={"header"}>
      {getKeys(cocktailEnum).map((cocktail, index) => (
        <Link key={cocktail} to={index ? `/${cocktail}` : "/"}>
          <button>{cocktail}</button>
        </Link>
      ))}
      {children}
    </div>
  );
};
