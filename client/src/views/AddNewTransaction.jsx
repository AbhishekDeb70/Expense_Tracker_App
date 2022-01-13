// Packages:
import React from 'react'
import { Link } from 'react-router-dom'

import ROUTES from '../routes'

// Components:
import AddTransaction from '../components/AddTransaction'


// Functions:
const AddNewTransaction = () => {
  return (
    <div className='container'>
      <AddTransaction />
      <Link to={ ROUTES.INDEX }>BACK</Link>
    </div>
  )
}


// Exports:
export default AddNewTransaction
