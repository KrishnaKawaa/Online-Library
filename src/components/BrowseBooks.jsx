import React, { useState, useEffect } from "react";
import { API_KEY } from "../utils/config";
import './BrowseBooks.css';

const BrowseBooks = () => {
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedBook, setSelectedBook] = useState(null);
    
    useEffect(() => {
        fetchBooks("fiction");
    }, []);

    const fetchBooks = (query) => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${API_KEY}&maxResults=12`)
        .then((res) => res.json())
        .then((data) => setBooks(data.items || []))
        .catch((err) => console.error("Error fetching books:", err));
    };

    const handleSearch = () => {
        if (!searchQuery) return;
        fetchBooks(searchQuery);
    };

    return (
        <div className="book-container">
            {!selectedBook ? (
                <div>
                    <div className="searchBar">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search books..."
                            className="inputBar"
                        />
                        <button onClick={handleSearch} className="searchButton">Search</button>
                    </div>
                    <div className="displayBook">
                        {books.map((book) => (
                            <div key={book.id} className="bookCard">
                                <h3 className="bookTitle">{book.volumeInfo.title}</h3>
                                {book.volumeInfo.imageLinks?.thumbnail && (
                                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="bookImage" />
                                )}
                                <p className="bookAuthor">{book.volumeInfo.authors?.join(", ") || "Unknown Author"}</p>
                                <p className="bookDescription">
                                    {book.volumeInfo.description ? book.volumeInfo.description.slice(0, 200) + "..." : "No description available"}
                                </p>
                                <button onClick={() => setSelectedBook(book)} className="moreButton">More</button>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <BookDetails book={selectedBook} onBack={() => setSelectedBook(null)} />
            )}
        </div>
    );
};






// Using Inline css here 
const BookDetails = ({ book, onBack }) => {
    return (
<div 
    className="bookDetails"
    style={{
        backgroundColor: "#A7BEAE",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        maxWidth: "600px",
        margin: "20px auto",
        textAlign: "center",
    }}
>
    <button 
        onClick={onBack} 
        className="backButton"
        style={{
            backgroundColor: "#ff4d4d",
            color: "white",
            padding: "8px 12px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "10px",
        }}
    >
        Back
    </button>
    <h2 
        className="bookTitle" 
        style={{ color: "#333", fontSize: "22px", marginBottom: "8px" }}
    >
        {book.volumeInfo.title}
    </h2>
    <p 
        className="bookAuthor" 
        style={{ fontSize: "16px", color: "#666", marginBottom: "12px" }}
    >
        {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
    </p>
    {book.volumeInfo.imageLinks?.thumbnail && (
        <img 
            src={book.volumeInfo.imageLinks.thumbnail} 
            alt={book.volumeInfo.title} 
            className="bookImage"
            style={{
                width: "100%",
                maxWidth: "250px",
                height: "auto",
                borderRadius: "8px",
                marginBottom: "12px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)"
            }}
        />
    )}
    <p 
        className="bookDescriptionFull"
        style={{
            fontSize: "14px",
            color: "#444",
            lineHeight: "1.5",
            maxHeight: "150px",
            overflowY: "auto",
            padding: "8px",
            backgroundColor: "#fff",
            borderRadius: "5px",
            boxShadow: "inset 0 0 5px rgba(0,0,0,0.1)"
        }}
    >
        {book.volumeInfo.description || "No description available"}
    </p>
    {book.volumeInfo.previewLink && (
        <a 
            href={book.volumeInfo.previewLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="previewLink"
            style={{
                display: "inline-block",
                marginTop: "12px",
                padding: "8px 14px",
                backgroundColor: "#007BFF",
                color: "white",
                textDecoration: "none",
                borderRadius: "5px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
            }}
        >
            Preview Book
        </a>
    )}
</div>

    );
};

export default BrowseBooks;
