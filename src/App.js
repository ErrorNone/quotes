import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Context from './Context/Context';
import Main from './Page/Main';
import Quotes from './Page/Quotes';
import './Reset.css';
import Navbar from './UI/Navbar/Navbar';
import Aristotel from "./Aristotel.jpg"
import Platon from "./Platon.jpg"
import Socrat from "./Socrat.jpg"

import { useState } from 'react';


function App() {
  
    const [philosophers, setPhilosophers] = useState([
      {id: 1, name: 'Аристотель', lifeYears: '384 - 322 г. до н. э.', photo: Aristotel},
      {id: 2, name: 'Сократ', lifeYears: '469 - 399 г. до н. э.', photo: Socrat},
      {id: 3, name: 'Платон', lifeYears: '428 - 347 г. до н. э.', photo: Platon}
    ])

    const [quotes, setQuotes] = useState([
      {id: 1, nameId: 1, 
        quote: 'Женщины, предающиеся пьянству, рожают детей, похожих в этом отношении на своих матерей', year: '356 г. до н. э.'},
      {id: 2, nameId: 1, 
        quote: 'Ничто так сильно не разрушает человека, как продолжительное физическое бездействие.', year: '342 г. до н. э.'},
      {id: 3, nameId: 1, 
        quote: 'Счастье — это довольство собою.', year: '369 г. до н. э.'},
      {id: 4, nameId: 2, 
        quote: 'Кто хочет — ищет способ, кто не хочет — ищет причину.', year: '457 г. до н. э.'},
      {id: 5, nameId: 2, 
        quote: 'Только тупые люди ищут смысл во всём.', year: '443 г. до н. э.'},
      {id: 6, nameId: 2, 
        quote: 'Никто тебе не друг, никто тебе не враг, но всякий человек тебе учитель.', year: '427 г. до н. э.'},
      {id: 7, nameId: 3, 
        quote: 'Любовь — это серьезное психическое заболевание.', year: '415 г. до н. э.'},
      {id: 8, nameId: 3, 
        quote: 'Глупца можно узнать по двум приметам: он много говорит о вещах, для него бесполезных, и высказывается о том, про что его не спрашивают.', year: '390 г. до н. э.'},
      {id: 9, nameId: 3, 
        quote: 'Конец войны видели только мёртвые.', year: '385 г. до н. э.'},
    ])

    const addQuote = (newQuotes) => {
      setQuotes([...quotes, newQuotes])
    }

    const AddPhilosophers = (newPhilosophers) => {
      setPhilosophers([...philosophers, newPhilosophers])
    }

    const deliteQuotes = (id) => {
     setQuotes(quotes.filter(quot => {
      if (quot.id !== id) {
        return quot; 
      }
    })) 
    } 

    const delitePhil = (id) => {
     setPhilosophers(philosophers.filter(ph => {
      if (ph.id !== id) {
        return ph; 
      }
    })) 
    } 
    
  return (
    <Context.Provider value={{philosophers, quotes, addQuote, deliteQuotes, AddPhilosophers, delitePhil}}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/main" element={<Main/>} />
          <Route path="/quotes/:nameId"  element={<Quotes/>}/>
          <Route path="*" element={<Main/>} />
        </Routes>

      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
