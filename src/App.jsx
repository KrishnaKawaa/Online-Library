import './App.css';
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import BrowseBooks from './components/BrowseBooks';
import Notfound from './components/Notfound';
import AddBooks from './components/AddBook';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
        <>
        <Navbar />
        <Home />
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
