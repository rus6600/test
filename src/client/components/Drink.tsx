import React from "react";
import { useLocation } from "react-router";

import "../assets/styles/style.scss";
import { cocktailEnum, drinkType } from "../../types";
import { useGetItemByNameQuery } from "../../store/api";
import { getKeys, regEx } from "../../utils";

export const Drink = () => {
  const location = useLocation();
  const { data, isLoading, isError } = useGetItemByNameQuery(
    location.pathname.slice(1)
      ? location.pathname.slice(1)
      : cocktailEnum.margarita,
  );
  if (isLoading) {
    return <p>is loading</p>;
  }
  if (isError) {
    return <p>is error</p>;
  }
  if (data) {
    return (
      <div className="drinks">
        {data.drinks.map((drink) => {
          const ingredients = getKeys(drink).reduce((acc, cur) => {
            const parsed = cur.match(regEx);
            if (drink[cur] && parsed && parsed[1]) {
              return {
                ...acc,
                [`${drink[cur]}`]:
                  drink[`strIngredient${parsed[1]}` as keyof drinkType],
              };
            }
            return acc;
          }, {});
          const {
            strDrink,
            strCategory,
            strAlcoholic,
            strGlass,
            strInstructions,
          } = drink;
          return (
            <div key={drink.idDrink} className={"drink"}>
              <div className={"drink__desk"}>
                <h2>{strDrink}</h2>
                <p>{strCategory}</p>
                <p>{strAlcoholic}</p>
                <p>{strGlass}</p>
                <p className="fw-700">Instructions:</p>
                <p>{strInstructions}</p>
                <p className="fw-700">List of ingredients:</p>
                <div className={"ingredients"}>
                  {Object.entries(ingredients).map(([measure, ingredient]) => {
                    const key = `${measure} : ${ingredient}`;
                    return <p key={key}>{key}</p>;
                  })}
                </div>
                <p></p>
              </div>
              <img
                className="drink__img"
                src={drink.strDrinkThumb}
                alt="test"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    );
  }
  return null;
};
