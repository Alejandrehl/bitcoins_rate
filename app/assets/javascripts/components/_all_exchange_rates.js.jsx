const AllExchangeRates = (props) => {

  let exchange_rates = props.exchange_rates.map( (exchange_rate, i) => {
    return(
      <ExchangeRate exchange_rate={exchange_rate} key={i}/>
    )
  })

  return(
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Currency</th>
          <th>Last</th>
          <th>Buy</th>
          <th>Sell</th>
          <th>Symbol</th>
        </tr>
      </thead>
      <tbody>
        {exchange_rates}
      </tbody>
    </table>
  )

}