class ExchangeRate extends React.Component{

  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log(this.props)
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