class ExchangeRate extends React.Component{

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.rechargeTable()
  }

  rechargeTable(){
    setInterval( () => {
      location.reload()
    }, 3000);
  }

  render(){
    return(
      <tr>
        <td>{this.props.exchange_rate[0]}</td>
        <td>{this.props.exchange_rate[1].last}</td>
        <td>{this.props.exchange_rate[1].buy}</td>
        <td>{this.props.exchange_rate[1].sell}</td>
        <td>{this.props.exchange_rate[1].symbol}</td>
      </tr>
    )
  }
}