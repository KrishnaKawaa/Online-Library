    import { useState } from "react";

    const BookSearch = () => {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        if (!query) return;

        const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;

        try {
        const response = await fetch(url);
        const data = await response.json();
        setBooks(data.items || []);
        } catch (error) {
        console.error("Error fetching books:", error);
        }
    };

    return (
        <div className="">
        <input
            type="text"
            placeholder="Enter book title or author..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-2 border rounded w-full mb-2"
        />
        <button onClick={fetchBooks} className="bg-blue-500 text-white p-2 rounded w-full">
            Search
        </button>

        <div className="mt-4">
            {books.length > 0 ? (
            books.map((book) => (
                <div key={book.id} className="border p-3 mb-2 rounded">
                <h3 className="font-bold">{book.volumeInfo.title}</h3>
                <p className="text-sm">{book.volumeInfo.authors?.join(", ") || "Unknown Author"}</p>
                {book.volumeInfo.imageLinks?.thumbnail && (
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="mt-2" />
                )}
                </div>
            ))
            ) : (
            <p className="text-gray-600">No books found</p>
            )}
        </div>
        </div>
    );
    };

    export default BookSearch;
