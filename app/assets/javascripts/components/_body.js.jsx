class Body extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      exchange_rates: []
    }
  }

  componentDidMount(){
    fetch('https://blockchain.info/ticker')
      .then( (response) => {
        return response.json()
      })
      .then( (data) => {
        console.log(data)
        console.log(typeof data)
        this.setState({
          exchange_rates: Object.entries(data)
        })
        console.log(this.state.exchange_rates)
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