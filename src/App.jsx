import Mainlayout from './layout/Mainlayout';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutUsPage from './pages/AboutUsPage';
import NotFoundPage from './pages/NotFoundPage';
import ReservationsPage from './pages/ReservationsPage';
import CustomersPage from './pages/CustomersPage';
import CompaniesPage from './pages/CompaniesPage';
import ActiveUsersPage from './pages/ActiveUsersPage';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Mainlayout/>}>

        <Route index element={<HomePage/>}/>

        <Route path='/menu' element={<MenuPage/>}/>

        <Route path='/about-us' element={<AboutUsPage/>}/>

        <Route path='/reservations' element={<ReservationsPage/>}/>

        <Route path='/affiliates/customers' element={<CustomersPage/>}/>

        <Route path='/affiliates/companies' element={<CompaniesPage/>}/>

        <Route path='/affiliates/active-users' element={<ActiveUsersPage/>}/>

        <Route path='*' element={<NotFoundPage/>}/>

      </Route>
    )
  )


  return <RouterProvider router={router}/>
}

export default App
