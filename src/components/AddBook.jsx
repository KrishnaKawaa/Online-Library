import './AddBook.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/bookSlice';

export default function AddBooks() {
    const [bookName, setBookName] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);
    
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Dispatch book to Redux store
        dispatch(addBook({ bookName, author, category, image }));
        
        // Redirect to BrowseBooks
        navigate("/browsebooks");
    };

    return (
        <div className='container'>
            <button className="backButton" onClick={() => navigate("/")}>← Back</button>
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter book name' value={bookName} onChange={(e) => setBookName(e.target.value)} required />
                    <input type="text" placeholder='Enter author name' value={author} onChange={(e) => setAuthor(e.target.value)} required />
                    <input type="text" placeholder='Enter book category' value={category} onChange={(e) => setCategory(e.target.value)} required />
                    <input type="file" accept="image/*" onChange={handleImageChange} required />
                    {image && <img src={image} alt="Preview" className="previewImage" />}
                    <button type="submit">Submit</button>
                </form>
            </div> 
        </div>
    );
}
