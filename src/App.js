import { HashRouter , Routes, Route } from 'react-router-dom';
import './App.css';

import Error from './page/Error';
import Home from './page/Home';

function App() {
  return (
      <HashRouter >
          <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='*' element={ <Error /> } />
          </Routes>
      </HashRouter >
  );
}

export default App;
