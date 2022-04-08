import React, { useContext } from 'react'
import QuotesList from '../Components/QuotesList'
import Context from '../Context/Context'
import cl from './Quotes.module.css'

const Quotes = () => {
  const {philosophers} = useContext(Context)
  return (
    <div className={cl.quotes}>
      <QuotesList philosophers={philosophers}/>
    </div>
    
  )
}

export default Quotes