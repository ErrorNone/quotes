import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Context from './Context/Context';
import Main from './Page/Main';
import Quotes from './Page/Quotes';
import './Reset.css';
import Navbar from './UI/Navbar/Navbar';

//huy
function App() {

  return (
    <Context.Provider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/main" element={<Main/>} />
          <Route path="/quotes" element={<Quotes/>}/>
        </Routes>

      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
