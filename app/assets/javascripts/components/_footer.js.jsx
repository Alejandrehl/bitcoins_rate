const Footer = props => {
  return(
    <div className="page-footer font-small teal pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase font-weight-bold">Bitcoins price index & Bitcoins exchange rates</h5>
            <ul>
              <li>
                <a href="https://github.com/Alejandrehl/bitcoins_rate">GitHub</a>
              </li>
            </ul>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3"/>
          <div className="col-md-6 mb-md-0 mb-3">
            <h5 className="text-uppercase font-weight-bold">Puedes revisar la documentación en los siguientes enlaces:</h5>
            <ul>
              <li>
                <a href="https://www.blockchain.com/api/exchange_rates_api">Exchange Rates Api</a>
              </li>
              <li>
                <a href="https://www.coindesk.com/api/">BPI real-time data</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">© 2018 Copyright:
        <a href="https://www.alehernandezdev.com"> Alejandro Hernández</a>
      </div>
    </div>
  )
}