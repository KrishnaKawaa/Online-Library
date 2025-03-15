import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { API_KEY } from "../utils/config";
import './BrowseBooks.css';

const BrowseBooks = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedBook, setSelectedBook] = useState(null);
    const [apiBooks, setApiBooks] = useState([]);

    const addedBooks = useSelector((state) => state.books.books); // Get books from Redux store

    useEffect(() => {
        fetchBooks("fiction");
    }, []);

    const fetchBooks = (query) => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${API_KEY}&maxResults=12`)
        .then((res) => res.json())
        .then((data) => setApiBooks(data.items || []))
        .catch((err) => console.error("Error fetching books:", err));
    };

    const handleSearch = () => {
        if (!searchQuery) return;
        fetchBooks(searchQuery);
    };

    return (
        <div className="book-container">
            <div className="searchBar">
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search books..." />
                <button onClick={handleSearch}>Search</button>
            </div>
            
            {/* Display Redux Books */}
            <div className="displayBook">
                {addedBooks.map((book, index) => (
                    <div key={index} className="bookCard">
                        <h3>{book.bookName}</h3>
                        {book.image && <img src={book.image} alt={book.bookName} />}
                        <p>{book.author}</p>
                        <p>{book.category}</p>
                    </div>
                ))}
            </div>

            {/* Display API Books */}
            <div className="displayBook">
                {apiBooks.map((book) => (
                    <div key={book.id} className="bookCard">
                        <h3>{book.volumeInfo.title}</h3>
                        {book.volumeInfo.imageLinks?.thumbnail && <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />}
                        <p>{book.volumeInfo.authors?.join(", ") || "Unknown Author"}</p>
                        <button onClick={() => setSelectedBook(book)}>More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrowseBooks;
