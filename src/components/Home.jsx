import './Home.css'
import { Link } from 'react-router-dom';



export default function Home(){


    return(
    <div className="homeContainer">

        <div className='welcomeMsg'>
            <h4>⭐Start your reading journey today</h4>
            <h1 className='header'>Where every page <br/> is a new Adventure</h1>
            <p className='welcomePara'>From classics to contemporary, our bookstore offers a wide selection<br/> of books to suit every taste and interest. Start exploring our shelves today and uncover your next Iiterary gem </p>
            <Link to='/browsebooks' className='input'> 🔍 </Link>
        </div>

        <div>
            <img className='bookImg' src='./src/assets/Books.png' alt="books" />
        </div>

    </div>
    )
}