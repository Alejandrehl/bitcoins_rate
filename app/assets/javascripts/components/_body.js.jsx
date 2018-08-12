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
        this.setState({
          exchange_rates: Object.entries(data)
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