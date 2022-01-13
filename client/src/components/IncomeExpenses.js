// Packages:
import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'


// State:
import { GlobalContext } from '../context/GlobalState'


// Functions:
export const IncomeExpenses = () => {
    // State:
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)
    const [ totalInc, setAllTotalInc ] = useState(null)
    const [ totalExp, setAllTotalExp ] = useState(null)
    /*
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc,item)=>(acc += item),0)
        .toFixed(2)
    const expense = (amounts.filter(item => item < 0).reduce((acc,item)=>(acc += item),0)*-1).toFixed(2)
    */

    // Effects:
    useEffect(() => {
        axios
            .get('http://localhost:5000/')
            .then((res) => {
                    // NOTE: res is unused
                    console.log('nothing to be specific', res.data)
                    const income = res.data
                        .filter(item => item.amount > 0)
                        .reduce((acc, item) => (acc += item.amount), 0)
                    const expense = (res.data
                        .filter(item => item.amount < 0)
                        .reduce((acc, item) => (acc += item.amount), 0) * -1)
                        .toFixed(2)
                    console.log(income)
                    setAllTotalInc(income)
                    setAllTotalExp(expense)
                })
            .catch(console.error)
    }, [])

    // Return:
    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className='money plus'>₹{ totalInc }</p>
            </div>
            <div>
                <h4>Expenditure</h4>
                <p className='money minus'>₹{ totalExp }</p>
            </div>
        </div>
    )
}
