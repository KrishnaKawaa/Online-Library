import './App.css';
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import BrowseBooks from './components/BrowseBooks';
import Notfound from './components/Notfound';
import AddBooks from './components/AddBook';
import BookDetails from './components/BookDetails';
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
        <Navbar />
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
      path:"/bookdetails",
      element:<BookDetails />
    },
    {
      path:'/category',
      element:<Category /> 
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
