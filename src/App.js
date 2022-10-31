import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contactform from './Components/Contactform';

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Contactform />}>
            {/* <Route path='contact' element={</>} /> */}
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
