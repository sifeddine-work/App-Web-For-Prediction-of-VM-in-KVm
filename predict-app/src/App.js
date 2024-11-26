import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Dashboard from './Pages/Dashboard';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className='main d-flex'>
        <div className='sidebarWrapper'>
          <Sidebar/>
        </div>

        <div className='content'>
          <Routes>
            <Route path="/" exact={true} element={<Dashboard/>}/>
            <Route path="./Pages/Dashboard" exact={true} element={<Dashboard/>}/>
          </Routes>
        </div>
      </div> 
    </BrowserRouter>
  );
}

export default App;
