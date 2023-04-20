import { Route, Routes} from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import {Boardlist} from './pages/boardlist';
import { Board } from './pages/board';
import { Layout } from './pages/Layout';
import { DataProvider } from './context/DataContext';
import { BoardWriteForm } from './pages/BoardWriteForm';
import { BoardModifyForm } from './pages/BoardModifyForm';
import { LoginForm } from './pages/LoginForm';
import { ImagePage } from './pages/ImagePage';


function App() {
  return (
    <div className="App">
    <DataProvider>
      <Routes>
        <Route path='/' Component={Layout}>  {/**nav Header 고정  */}
          <Route path='/' Component={Home}/>
          <Route path='/boardlist' Component={Boardlist}/>
          <Route path='/boardlist/:id' Component={Board}/>
          <Route path='/boardwriteform' Component={BoardWriteForm}/>
          <Route path='/board-modify-form' Component={BoardModifyForm}/>
          <Route path='/loginForm' Component={LoginForm}/>
          <Route path='/image' Component={ImagePage}/>
        </Route> 
      </Routes>
    </DataProvider>
    </div>
  );
}

export default App;
