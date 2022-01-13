import axios from 'axios';
import React from 'react';

export const Transaction = ({transaction}) => {
    //const {deleteTransaction} = useContext(GlobalContext);
    console.log(transaction)
    const sign = transaction.amount < 0 ? '-':'+';
   const deleteTransaction=(transactionid)=>
    {
        axios.delete(`http://localhost:5000/${transactionid}`).then(res=>
        {console.log(res),window.location.reload()})
    .catch(error=>console.log(error))
    }

    return (
        <li className={transaction.amount < 0 ? 'minus':'plus'}>
                    {transaction.text} <span>{sign}₹{Math.abs(transaction.amount)}</span><button
                    onClick={()=> deleteTransaction(transaction.id)} className="delete-btn">x</button>
                </li>
    )
}
