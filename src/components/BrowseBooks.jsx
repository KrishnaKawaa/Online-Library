import React, { useState, useEffect } from "react";
import { API_KEY } from "../utils/config";

const BrowseBooks = () => {
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedBook, setSelectedBook] = useState(null);
    
    useEffect(() => {
        fetchBooks("fiction");
    }, []);

    const fetchBooks = (query) => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => setBooks(data.items || []))
        .catch((err) => console.error("Error fetching books:", err));
    };

    const handleSearch = () => {
        if (!searchQuery) return;
        fetchBooks(searchQuery);
    };

    return (
        <div style={{ padding: "16px" }}>
            {!selectedBook ? (
                <div>
                    <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search books..."
                            style={{ border: "1px solid #ccc", padding: "8px", flex: 1, borderRadius: "4px" }}
                        />
                        <button
                            onClick={handleSearch}
                            style={{ backgroundColor: "#007BFF", color: "white", padding: "8px 16px", border: "none", borderRadius: "4px", cursor: "pointer" }}
                        >
                            Search
                        </button>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" }}>
                        {books.map((book) => (
                            <div key={book.id} style={{ padding: "16px", border: "1px solid #ddd", borderRadius: "4px", boxShadow: "2px 2px 6px rgba(0,0,0,0.1)" }}>
                                <h3 style={{ fontWeight: "bold", fontSize: "16px" }}>{book.volumeInfo.title}</h3>
                                {book.volumeInfo.imageLinks?.thumbnail && (
                                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} style={{ width: "100%", height: "auto" }} />
                                )}
                                <p style={{ fontSize: "14px", color: "#555" }}>{book.volumeInfo.authors?.join(", ") || "Unknown Author"}</p>
                                <p className="bookDescription">
                                    {book.volumeInfo.description ? book.volumeInfo.description.slice(0, 200) + "..." : "No description available"}
                                </p>
                                <button
                                    onClick={() => setSelectedBook(book)}
                                    style={{ backgroundColor: "#28a745", color: "white", padding: "8px 12px", border: "none", borderRadius: "4px", cursor: "pointer", marginTop: "8px" }}
                                >
                                    More
                                </button>
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

const BookDetails = ({ book, onBack }) => {
        return (
        <div className="">
            <button onClick={onBack} className="">Back</button>
            <h2 className="">{book.volumeInfo.title}</h2>
            <p className="">{book.volumeInfo.authors?.join(", ") || "Unknown Author"}</p>
            {book.volumeInfo.imageLinks?.thumbnail && (
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="" />
            )}
            <p className="mt-4">{book.volumeInfo.description || "No description available"}</p>
            {book.volumeInfo.previewLink && (
            <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer" className="">
                Preview Book
            </a>
            )}
        </div>
        );
    };
export default BrowseBooks;
