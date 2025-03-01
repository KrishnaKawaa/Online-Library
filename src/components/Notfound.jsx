import './notfound.css';
import { Link } from 'react-router-dom';


export default function Notfound(){
    return(
        <div className='errorContainer'>
            <img src="./src/assets/monster.png" alt="errorImageMonster"/>
            <div className='errorMessage'>
            <h1>Oops! Page Not Found </h1>
            <p>You must have picked the wrong door because I haven't been able to lay my eyes on the page you've been searching for.</p>
            <Link className='homelink' to='/'> Go to Home Page</Link>
            </div>
        </div>
    )
}