import React, { useContext, useState } from 'react'
import Context from '../Context/Context'
import MyButton from '../UI/Button/MyButton'
import MyForm from '../UI/Form/MyForm'
import MyInput from '../UI/Input/MyInput'
import cl from './QuotesAdd.module.css'

const QuotesAdd = ({philosoph, setModal}) => {
    const [quotess, setQuotess] = useState({quote: '', year: ''})
    const {addQuote} = useContext(Context)

    const createQuote = (e) => {
      e.preventDefault()
      const newQuotes = {
        ...quotess, id: Date.now(), nameId: philosoph.id
      }
      addQuote(newQuotes)
      setQuotess({quote: '', year: ''})
      setModal(false)
    }
  return (
    <MyForm className={cl.form}>
        <MyInput 
        placeholder='Введите цитату...' 
        value={quotess.quote}
        onChange={e => setQuotess({...quotess, quote: e.target.value})}
        />
        <MyInput 
        placeholder='Введите дату создания цитаты...' 
        value={quotess.year}
        onChange={e => setQuotess({...quotess, year: e.target.value})}
        />
        <MyButton  className={cl.btn} onClick={createQuote}>Добавить цитату</MyButton>
    </MyForm>
  )
}

export default QuotesAdd