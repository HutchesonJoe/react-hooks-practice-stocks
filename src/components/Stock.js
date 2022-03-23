import React, { useState } from "react";

function Stock({
  stock, handleClick}) {

 
  return (
    <div>
      <div className="card" id ={stock.id} onClick={()=>handleClick(stock)} disabled={true}>
        <div className="card-body" >
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
