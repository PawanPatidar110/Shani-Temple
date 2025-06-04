import Glimpses from './Components/Glimpses';
import About from './Pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import Layout from './Layout';
import ShaniCalendar from './Pages/ShaniCalendar';
import Seva from './Pages/Seva';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/seva' element={<Seva />} />
            <Route path='/calender' element={<ShaniCalendar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
