import style from "./TransactionHistory.module.css"

const TransactionHistory = ({items}) => {
  return (
    <table className={style.table}>
        <thead className={style.head}>
          <tr className={style.row}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={style.body}>
            {items.map((item) => {
                return(
                    <tr className={style.row} key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
  )
}

export default TransactionHistory