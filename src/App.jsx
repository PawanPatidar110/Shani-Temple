import Glimpses from './Components/Glimpses';
import About from './Pages/About';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Layout';
import ShaniCalendar from './Pages/ShaniCalendar';
import Seva from './Pages/Seva';
import Login from './Admin/Login';
import Dashboard from './Admin/Dashboard';
import Management from './Admin/Page/Management';
import Blog from './Admin/Page/Blog';
import Gallery from './Admin/Page/Gallery';
import AddManagement from './Admin/Components/Management/AddManagement';
import UpdateManagement from './Admin/Components/Management/UpdateManagement';
import AddGallery from './Admin/Components/Gallery/AddGallery';
import AddBlog from './Admin/Components/Blog/AddBlog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Layout Routes */}
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/seva' element={<Seva />} />
          <Route path='/calender' element={<ShaniCalendar />} />
        </Route>

        {/* Admin Routes */}
        <Route path='/login' element={<Login />} />

        {/* Dashboard is parent route */}
        <Route path='/dashboard' element={<Dashboard />}>
          {/* Nested routes inside dashboard */}
          <Route index element={<Navigate to="management" replace />} />
          <Route path='management' element={<Management />} />
          <Route path='add-management' element={<AddManagement />} />
          <Route path='update-management/:id' element={<UpdateManagement />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='add-gallery' element={<AddGallery />} />
          <Route path='blog' element={<Blog />} />
          <Route path='add-blog' element={<AddBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
