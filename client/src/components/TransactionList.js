import React,{useContext, useEffect, useState} from 'react'
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';
import axios from 'axios';

export const TransactionList = () => {
    const [alltransaction, setalltransaction] = useState(null);
    const {transactions} = useContext(GlobalContext);
    useEffect(() => {
      axios.get('http://localhost:5000/').then(res=>
          {console.log(res),setalltransaction(res.data)})
      .catch(error=>console.log(error))
    }, [])
    return (
        <div>
            <h3>History</h3>
            <ul  className="list">
                {alltransaction && alltransaction.map(transaction=>(<Transaction key={transaction.id} transaction={transaction}/>))}
            </ul>
        </div>
    )
}
