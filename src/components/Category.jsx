import { useState } from "react";
import './Category.css';
import { API_KEY } from "../utils/config";
const categories = [
  "Fiction",
  "Science",
  "History",
  "Technology",
  "Business",
  "Philosophy",
  "Health",
  "Art",
  "Travel",
  "Self-Help"
];
const api_key = API_KEY;
const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null); // To track selected book

  const fetchBooks = async (category) => {
    setSelectedCategory(category);
    setSelectedBook(null); // Reset selected book

    const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${encodeURIComponent(category)}&key=${api_key}`;


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
      {!selectedBook ? (
        <div>
          <div className="headingContainer">
          <h2 className="heading">Categories</h2>
          </div>

          {/* Categories List */}
          <div className="btnList">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => fetchBooks(category)}
                className="button"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Display Books */}
          <div className="DisplayBookContainer">
          <div className="booksContainer">
          <h3 className="headContainer">
            {selectedCategory ? `Books in ${selectedCategory}` : "Select a category"}
          </h3>
          <div className="allbookContainer">
            {books.length > 0 ? (
              books.map((book) => (
                <div key={book.id} className="bookContainer">
                  <h3 className="bookTitle">Title: {book.volumeInfo.title}</h3>
                  {book.volumeInfo.imageLinks?.thumbnail && (
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="bookImage" />
                  )}
                                    <p className="bookAuthor">Authors:{book.volumeInfo.authors?.join(", ") || "Unknown Author"}</p>
                  <p className="bookDescription">Description:<br/>
                    {book.volumeInfo.description ? book.volumeInfo.description.slice(0, 300) + "..." : "No description available"}
                  </p>
                  <button
                    onClick={() => setSelectedBook(book)}
                    className="moreButton"
                  >
                    More
                  </button>
                </div>
              ))
            ) : (
              <p className="innerHeading">{selectedCategory ? "No books found" : "Click a category to view books"}</p>
            )}
          </div>
          </div>
          </div>
        </div>
      ) : (
        <BookDetails book={selectedBook} onBack={() => setSelectedBook(null)} />
      )}
    </div>
  );
};

// Book Details Component
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

export default Category;
