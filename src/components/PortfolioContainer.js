import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, setPortfolio}) {

  function sell(stock){
    let filteredFolio = portfolio.filter(myStock => stock !== myStock)
    setPortfolio(filteredFolio)
  }

  const myPortfolio = portfolio.map(stock=>{
    return (
      <Stock 
        stock={stock} 
        key = {stock.id} 
        portfolio={portfolio} 
        setPortfolio={setPortfolio}
        id = {stock.id}
        handleClick={sell}
        />
      )
  })
  
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        myPortfolio 
      }
    </div>
  );
}

export default PortfolioContainer;
