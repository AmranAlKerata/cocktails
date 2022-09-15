import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import { Fragment } from "react";

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();
  const { drinks } = cocktails;

  if (loading) {
    return <Loading />;
  }
  return (
    <section className="section">
      {!drinks && (
        <h2 className="section-title">
          no cocktails matched your search criteria
        </h2>
      )}
      {drinks && (
        <Fragment>
          <h2 className="section-title">cocktails</h2>
          <div className="cocktails-center">
            {drinks.map((drink) => {
              return <Cocktail key={drink.idDrink} {...drink} />;
            })}
          </div>
        </Fragment>
      )}
    </section>
  );
};

export default CocktailList;
