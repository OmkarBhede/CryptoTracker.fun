import React from "react";
import CoinDisplay from "./CoinDisplay";

const CoinsList = ({ data }) => {
  return (
    <div>
      {/* <CoinDisplay
        name={data[1].name}
        price="asdf"
        symbol="asdf"
        marketcap="asf"
        volume="asdf"
        image="asdf"
        priceChange={-10}
      /> */}
      {data.map((coin, i) => {
        return (
          <CoinDisplay
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
};

export default CoinsList;
