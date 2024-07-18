import React from "react";
import { Link } from "react-router-dom";

import { getKeys } from "../../utils";
import { cocktailEnum } from "../../types";
import { useLocation } from "react-router";

interface Props {
  children?: React.ReactNode;
}

export const Header: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname.slice(1);
  return (
    <div className={"header"}>
      {getKeys(cocktailEnum).map((cocktail, index) => (
        <Link key={cocktail} to={index ? `/${cocktail}` : "/"}>
          <button
            className={
              (index === 0 && location.pathname === "/") ||
              currentPath === cocktail
                ? "selected"
                : ""
            }
          >
            {cocktail}
          </button>
        </Link>
      ))}
      {children}
    </div>
  );
};
