import React from 'react'
import QuotesList from '../Components/QuotesList'
import cl from './Quotes.module.css'



const Quotes = () => {

  return (
    <div className={cl.quotes}>
      <QuotesList  />
    </div>
    
  )
}

export default Quotes