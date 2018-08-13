class ExchangeRate extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <tr>
        <td>{this.props.exchange_rate[0]}</td>
        <td>{this.props.exchange_rate[1].last.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
        <td>{this.props.exchange_rate[1].buy.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
        <td>{this.props.exchange_rate[1].sell.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
        <td>{this.props.exchange_rate[1].symbol}</td>
      </tr>
    )
  }
}