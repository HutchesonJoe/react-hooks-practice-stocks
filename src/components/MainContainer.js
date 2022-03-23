import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockList, setStockList] = useState([])
  const [portfolio, setPortfolio] = useState([])


  useEffect(()=>{
    fetch("http://localhost:3001/stocks")
      .then (r=>r.json())
      .then (data=>setStockList(data))
  }, [])

  function handleAlphSort(){
   const alphaSort = stockList.sort((stock1, stock2)=>{
    if (stock1.name < stock2.name){
      return -1;
    }

    if (stock1.name > stock2.name){
      return 1;
    }
    return 0
   })

   setStockList([...alphaSort])
  }

  function handlePriceSort(){
  const priceSort = stockList.sort((stock1, stock2)=> stock1.price - stock2.price)
  setStockList([...priceSort])
  }

  function handleFilter(e){
    fetch("http://localhost:3001/stocks")
      .then (r=>r.json())
      .then (data=>{
        const filteredList = data.filter(stock => stock.type === e.target.value)
        setStockList(filteredList)
      })
  }


  function handleBuy(newStock){
    setPortfolio([...portfolio, newStock])
 }

  return (
    <div>
      <SearchBar 
        stockList={stockList} 
        setStockList={setStockList}
        handleAlphaSort={handleAlphSort}
        handlePriceSort={handlePriceSort}
        handleFilter={handleFilter}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stockList={stockList} 
            setStockList={setStockList}
            portfolio={portfolio}
            setPortfolio={setPortfolio}
            handleBuy={handleBuy}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            stockList={stockList} 
            setStockList={setStockList}
            portfolio={portfolio}
            setPortfolio={setPortfolio}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
