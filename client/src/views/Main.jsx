// Packages:
import React from 'react'
import { Link } from 'react-router-dom'


// Constants:
import ROUTES from '../routes'


// Components:
import { Balance } from '../components/Balance'
import { IncomeExpenses }  from '../components/IncomeExpenses'
import { TransactionList } from '../components/TransactionList'


// Functions:
const Main = () => {
  return (
    <div className='container'>
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <Link to={ ROUTES.ADD_NEW_TRANSACTION }>Add New Transaction</Link>
    </div>
  )
}


// Exports:
export default Main
