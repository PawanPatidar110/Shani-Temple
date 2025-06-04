import Glimpses from './Components/Glimpses';
import About from './Pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Layout from './Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
