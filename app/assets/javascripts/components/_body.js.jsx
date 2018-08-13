class Body extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      exchange_rates: [],
      bitcoin_prices: []
    }
  }

  componentDidMount(){
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
          bitcoin_prices: Object.entries(data)
        })
      })
      .catch( (error) => {
        console.log(error)
      })
  }

  render(){
    return (
      <div>
        <AllExchangeRates exchange_rates={this.state.exchange_rates} />
      </div>
    )
  }
}