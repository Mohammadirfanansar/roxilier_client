import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Dashboard/>}></Route>
        <Route path=''></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
