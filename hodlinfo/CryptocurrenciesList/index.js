import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptocurrenciesHeader = () => (
    <div className="list-header">
      <p className="list-coin-type-heading">#</p>
      <div className="usd-and-euro-values-container">
        <p className="list-coin-value-heading">Platform</p>
        <p className="list-coin-value-heading">Last Traced Price</p>
        <p className="list-coin-value-heading">Buy/sellPrice</p>
        <p className="list-coin-value-heading">Difference</p>
        <p className="list-coin-value-heading">Saving</p>
      </div>
    </div>
  )

  renderCryptocurrenciesView = () => {
    const {cryptocurrenciesData} = this.props

    return (
      <div className="cryptocurrencies-list-container">
        {this.renderCryptocurrenciesHeader()}
        <ul className="cryptocurrencies-list">
          {cryptocurrenciesData.map(eachCryptocurrency => (
            <CryptocurrencyItem
              key={eachCryptocurrency.id}
              cryptocurrencyDetails={eachCryptocurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrencies-container">
        <h1 className="heading">HODLINFO</h1>
        {this.renderCryptocurrenciesView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
