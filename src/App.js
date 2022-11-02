import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contactform from './Components/Contactform';
import Login from './Components/Login';
import Todo from './Components/Todo';

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Contactform />}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/todo' element={<Todo/>}/>
          
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
