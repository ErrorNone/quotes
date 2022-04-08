import React from 'react'
import QuotesHeader from './QuotesHeader'
import cl from './QuotesItem.module.css'
import QuotesMain from './QuotesMain'

const QuotesItem = ({philosoph}) => {
  return (
    <div className={cl.quotes}>
      <QuotesHeader philosoph={philosoph}/>
      <QuotesMain/>
    </div>
  )
}

export default QuotesItem