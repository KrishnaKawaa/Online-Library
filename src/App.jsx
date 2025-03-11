import './App.css';
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import BrowseBooks from './components/BrowseBooks';
import Notfound from './components/Notfound';
import AddBooks from './components/AddBook';
import Category from './components/Category';


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
        <>
        <Navbar />
        <Home /><hr/>
        <Category />
        </>
    },
    {
      path:"/browsebooks",
      element:
        <>
        <Navbar /><hr/>
        <BrowseBooks />
        </>
    },
    {
      path:"/addbook",
      element:
        <>
        <Navbar />
        <AddBooks />
        </>
    },
    {
      path:'/category',
      element:<>
      <Navbar/>
      <Category /> 
      </>
    },
    {
      path:'*',
      element:<Notfound />
    }
  ]
)


function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
