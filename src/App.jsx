import Mainlayout from './layout/Mainlayout';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutUsPage from './pages/AboutUsPage';
import NotFoundPage from './pages/NotFoundPage';
import ReservationsPage from './pages/ReservationsPage';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Mainlayout/>}>

        <Route index element={<HomePage/>}/>

        <Route path='/menu' element={<MenuPage/>}/>

        <Route path='/about-us' element={<AboutUsPage/>}/>

        <Route path='/reservations' element={<ReservationsPage/>}/>

        <Route path='*' element={<NotFoundPage/>}/>

      </Route>
    )
  )


  return <RouterProvider router={router}/>
}

export default App
