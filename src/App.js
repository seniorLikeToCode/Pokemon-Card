import { useState} from 'react';
import Search from './components/search/search';
import Card  from './components/pokemonCard/card';
import './App.css';


function App() {
  const [data, setData] = useState();
  return (
    <div className='container'>
      <Search setData={setData} />
      <Card data={data} />
    </div>
  )
}

export default App;
