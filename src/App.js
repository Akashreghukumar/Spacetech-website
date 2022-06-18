
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contacts from './routes/Contacts';
import Explore from './routes/Explore';
import Home from './routes/Home';
import Training from './routes/Training';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/explore' element={<Explore/>}></Route>
          <Route path='/training' element={<Training/>}></Route>
          <Route path='/contacts' element={<Contacts/>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
