const Main = (props) => {
  return(
    <div className="container text-center">
      <h1>Bitcoins prince index & Bitcoins exchange rates</h1>
      <p>
        Puedes revisar la documentación en los siguientes enlaces:<br/>
      </p>
      <ul className="col-md-4 offset-md-4">
        <li>
          <a href="https://www.blockchain.com/api/exchange_rates_api">Exchange Rates Api</a>
        </li>
        <li>
          <a href="https://www.coindesk.com/api/">BPI real-time data</a>
        </li>
      </ul>
      <Body />
    </div>
  )
}