import '../Reset.css';
import cl from './Main.module.css';
import PhilosophersList from '../Components/PhilosophersList';
import { useContext, useState } from 'react';
import Context from '../Context/Context';
import PhilosophersAdd from '../Components/PhilosophersAdd';
import Loader from '../UI/Loader/Loader';


  
function Main() {
 const {philosophers} = useContext(Context)
 const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 2000);

 
 
  return (
    <div className={cl.main}>
      <h1 className={cl.title}>Цитаты великих философов</h1>
      <PhilosophersAdd/>
      
       {loading && <Loader/>}
       {philosophers.length 
       ? <PhilosophersList philosophers={philosophers}/>
       : loading 
       ? null 
       : <p className={cl.p}>Не найдено не одного философова!</p>
       }
      
      
      
    </div>
  );
}

export default Main;
