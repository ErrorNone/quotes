import React, { useState } from 'react'
import MyButton from '../UI/Button/MyButton'
import Modal from '../UI/Modal/Modal'
import QuotesAdd from './QuotesAdd'
import QuotesHeader from './QuotesHeader'
import cl from './QuotesItem.module.css'
import QuotesMain from './QuotesMain'

const QuotesItem = ({philosoph}) => {
  const [modal, setModal] = useState(false)

  return (
    <div className={cl.quotes}>
      
      <Modal visible={modal} setVisible={setModal}>
        <QuotesAdd setModal={setModal} philosoph={philosoph}/>
      </Modal>
      <QuotesHeader philosoph={philosoph}/>
      <MyButton style={{margin: 30}} onClick={() => setModal(true)}>Добавить цитату</MyButton>
      <QuotesMain philosoph={philosoph}/>
    </div>
  )
}

export default QuotesItem