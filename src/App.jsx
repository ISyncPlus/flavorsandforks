import Mainlayout from './layout/Mainlayout';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Mainlayout/>}>

        <Route index element={<HomePage/>}/>

        <Route path='/menu' element={<MenuPage/>}/>

      </Route>

      



    )
  )


  return <RouterProvider router={router}/>
}

export default App
