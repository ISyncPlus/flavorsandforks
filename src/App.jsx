import Mainlayout from './layout/Mainlayout';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutUsPage from './pages/AboutUsPage';
import NotFoundPage from './pages/NotFoundPage';
import ReservationsPage from './pages/ReservationsPage';
import CustomersPage from './pages/CustomersPage';
import CompaniesPage from './pages/CompaniesPage';
import UsersPage from './pages/UsersPage';
import UserPage from './pages/UserPage';
import CompanyDetailsPage from './pages/CompanyDetailsPage';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

function App() {
  const API_URL= 'https://fake-json-api.mock.beeceptor.com';

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Mainlayout/>}>

        <Route index element={<HomePage/>}/>

        <Route path='/menu' element={<MenuPage/>}/>

        <Route path='/about-us' element={<AboutUsPage/>}/>

        <Route path='/reservations' element={<ReservationsPage/>}/>

        <Route path='/affiliates/customers' element={<CustomersPage url={API_URL} />}/>

        <Route path='/affiliates/companies' element={<CompaniesPage url={API_URL} />}/>

        <Route path='/affiliates/companies/:id' element={<CompanyDetailsPage/>}/>

        <Route path='/affiliates/active-users' element={<UsersPage url={API_URL} />}/>

        <Route path='/affiliates/users/:id' element={<UserPage />}/>

        <Route path='*' element={<NotFoundPage/>}/>

      </Route>
    )
  )


  return <RouterProvider router={router}/>
}

export default App
