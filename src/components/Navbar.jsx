import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

export default function Navbar(){
    const navigate = useNavigate();
function handleClick(){
    navigate('./addbooks');

}
    return(
        <div className='navbarContainer'>
        <h3 className="title">BookWorld</h3>
        <div className='links'>
            <Link className="link" to="/" >Home</Link>
            <Link className="link" to="/browsebooks">Browse</Link>
            <Link className="link" to='/category'>Category</Link>
        </div>
        <div className="btnContainer">
        <button onClick={handleClick} className="addBookButton">AddBook</button>
        </div>
        </div>
    )
}