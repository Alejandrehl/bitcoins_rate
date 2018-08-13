class BitcoinPriceUSD extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      code: '',
      description: '',
      rate: '',
      rate_float: 0.0
    }
  }

  componentDidMount(){

    setInterval( () => {
      this.setState({
        code: this.props.bitcoin_prices['bpi']['USD'].code,
        description: this.props.bitcoin_prices['bpi']['USD'].description,
        rate: this.props.bitcoin_prices['bpi']['USD'].rate,
        rate_float: this.props.bitcoin_prices['bpi']['USD'].rate_float
      })
      console.log(this.props.bitcoin_prices['bpi']['USD'].rate)
    }, 1000);

  }

  render(){
    return(
      <table className="table table-striped jumbotron">
      <thead>
        <tr>
          <th>Code</th>
          <th>Description</th>
          <th>Rate</th>
          <th>Rate Float</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{ this.state.code }</td>
          <td>{ this.state.description }</td>
          <td>{ this.state.rate }</td>
          <td>{ this.state.rate_float }</td>
        </tr>
      </tbody>
    </table>
    )
  }
}