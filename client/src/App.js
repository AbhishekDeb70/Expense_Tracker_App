import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import  {Header}  from './components/Header'
import Main from './views/Main'
import AddNewTransaction from './views/AddNewTransaction'
import { GlobalProvider } from './context/GlobalState'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import axios from 'axios'
import './App.css'


// Constants:
import ROUTES from './routes'

// Functions:
const App = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Header />
        <Routes>
          <Route exact path={ ROUTES.INDEX } element={ <Main /> } />
          <Route path={ ROUTES.ADD_NEW_TRANSACTION } element={ <AddNewTransaction /> } />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}


// Exports:
export default App
