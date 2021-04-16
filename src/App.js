import logo from "./logo.svg";
import "./App.css";
import SearchBox from "./SearchBox";
import CoinsList from "./CoinsList";
import Rect from "react";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      coinsData: [],
      searchBox: "",
    };
  }

  componentDidMount() {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((resp) => resp.json())
      .then((Data) => {
        this.setState({ coinsData: Data });
      });
  }

  onSearchCoins = (event) => {
    this.setState({
      searchBox: event.target.value,
    });
  };

  render() {
    const filteredCoins = this.state.coinsData.filter((coin) => {
      return coin.name
        .toLowerCase()
        .includes(this.state.searchBox.toLowerCase());
    });
    console.log(filteredCoins);
    return (
      <div className="coin-app">
        <h1 className="coin-text">Live Crypto-Currency Tracker</h1>
        <h6 className="coin-text">-- Omkar Bhede --</h6>
        <div className="coin-search">
          <SearchBox searchChange={this.onSearchCoins} />
        </div>
        <CoinsList data={filteredCoins} />
      </div>
    );
  }
}

export default App;
