class Body extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      exchange_rates: [],
      bitcoin_prices: []
    }
  }

  componentDidMount(){
    this.fetchBPI()
    setInterval( () => {
      this.fetchRates()
      this.fetchBPI()
    }, 1000);

  }

  fetchRates(){
    fetch('https://blockchain.info/ticker')
      .then( (response) => {
        return response.json()
      })
      .then( (data) => {
        this.setState({
          exchange_rates: Object.entries(data)
        })
      })
      .catch( (error) => {
        console.log(error)
      })
  }

  //BPI => Bitcoins Price Index
  fetchBPI(){
    fetch('https://api.coindesk.com/v1/bpi/currentprice/usd.json')
      .then( (response) => {
        return response.json()
      })
      .then( (data) => {
        this.setState({
          bitcoin_prices: data
        })
      })
      .catch( (error) => {
        console.log(error)
      })
  }

  render(){
    return (
      <div>
        <h1>Información en tiempo real del bitcoin - USD</h1>
        <BitcoinPriceUSD bitcoin_prices={this.state.bitcoin_prices} />
        <br/>
        <h1>Información del bitcoin desfasada en 15 minutos - Todas las monedas</h1>
        <AllExchangeRates exchange_rates={this.state.exchange_rates} />
      </div>
    )
  }
}