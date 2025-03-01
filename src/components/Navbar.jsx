import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <div className='navbarContainer'>
        <h3 className="title">BookWorld</h3>
        <div className='links'>
            <Link className="link" to="/" >Home</Link>
            <Link className="link" to="/browsebooks">Browse</Link>
            <Link className="link" to='/category'>Category</Link>
        </div>
        <div className="btnContainer">
        <button className="addBookButton">AddBook</button>
        </div>
        </div>
    )
}