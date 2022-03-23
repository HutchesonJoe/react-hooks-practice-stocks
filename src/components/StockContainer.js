import React from "react";
import Stock from "./Stock";



function StockContainer({stockList, setStockList, handleBuy, portfolio, setPortfolio}) {

  function purchase(stock){
    setPortfolio([...portfolio, stock])
  }

  const renderStockList = stockList.map(stock => {
    return (
      <Stock
        stock={stock} 
        stockList={stockList}
        handleClick={purchase} 
        key = {stock.id}
        portfolio = {portfolio}
        setPortfolio = {setPortfolio}
      />
    )
  })
  return (
    <div>
      <h2>Stocks</h2>
      {renderStockList}
    </div>
  );
}

export default StockContainer;
