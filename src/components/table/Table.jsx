import './table.scss'

const List = () => {

  const rows = [
    {
      id:112223,
      product:'Acer Nitro 5',
      img:'https://tse2.mm.bing.net/th?id=OIP.mwGkHgo_LjCbkA7y2bO40wHaEK&pid=Api&P=0&w=362&h=203',
      customer:'John Smith',
      date:'1 March',
      amount:'785',
      method:'Cash on Delivery',
      status:'Approved'
    },
    {
      id:112223,
      product:'Playstation 5',
      img:'https://tse3.mm.bing.net/th?id=OIP.xc3Aj9yqXN7UXnyHThJ2-gHaGG&pid=Api&P=0&w=196&h=162',
      customer:'Michael Doe',
      date:'1 March',
      amount:'75',
      method:'Online Payment',
      status:'Pending'
    },
    {
      id:112223,
      product:'Acer Nitro 5',
      img:'https://tse4.mm.bing.net/th?id=OIP.W55uIJD31BwwMtFSOu9slQHaEc&pid=Api&P=0&w=352&h=211',
      customer:'John Smith',
      date:'1 March',
      amount:'785',
      method:'Cash on Delivery',
      status:'Approved'
    },
    {
      id:112223,
      product:'Playstation 5.4.2',
      img:'https://tse3.mm.bing.net/th?id=OIP.7M5gyNLV_Hny05cTA-rE2QHaEK&pid=Api&P=0&w=344&h=193',
      customer:'Michael Doe',
      date:'1 March',
      amount:'75',
      method:'Online Payment',
      status:'Pending'
    },
    {
      id:112223,
      product:'Acer Nitro 5',
      img:'https://tse2.mm.bing.net/th?id=OIP.oTT1j--0OpwHu5jRSSBHaAHaEY&pid=Api&P=0&w=308&h=182',
      customer:'John Smith',
      date:'1 March',
      amount:'785',
      method:'Cash on Delivery',
      status:'Approved'
    },
  ]
  return (
    <table className='table'>
      <tr>
        <th className='tableCell'>Tracking ID</th>
        <th className='tableCell'>Product</th>
        <th className='tableCell'>Customer</th>
        <th className='tableCell'>Date</th>
        <th className='tableCell'>Amount</th>
        <th className='tableCell'>Payment Method</th>
        <th className='tableCell'>Status</th>
      </tr>
      {
        rows.map((row)=>(
          <tr key={row.id}>
          <td className='tableCell'>{row.id}</td>
          <td className='tableCell'>
                        <div className="cellWrapper">
                          <img src={row.img} alt="" className="image" />
                          {row.product}
                        </div>
          </td>
          <td className='tableCell'>{row.customer}</td>
          <td className='tableCell'>{row.date}</td>
          <td className='tableCell'>{row.amount}</td>
          <td className='tableCell'>{row.method}</td>
          <td className='tableCell'><span className={`status ${row.status}`}>{row.status}</span></td>
        </tr>
        ))
      }
    </table>
  )
}

export default List