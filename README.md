# Online Library System

## 📌 Project Overview
The **Online Library System** is a React-based web application that allows users to browse, search, and add books to a library. It integrates **React-Redux** to manage state and store added books. The application also fetches books from the **Google Books API** to provide additional book data.

---
## 🛠️ Features
- **Add Books**: Users can add books with details such as name, author, category, and cover image.
- **Store Books in Redux**: The added books are stored in a global state using Redux.
- **Browse Books**: Users can search for books from the Google Books API.
- **View Book Details**: Click on any book to see more information.
- **Persisted State**: Books remain in Redux state even when navigating between pages.

---
## 📂 Project Setup
Follow the steps below to set up and run the project locally.

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/online-library-system.git
cd online-library-system
```

### 2️⃣ Install Dependencies
```bash
npm install
```
This installs all the required packages, including React, Redux, React Router, and Tailwind CSS.

### 3️⃣ Set Up API Key for Google Books API
- Create a `.env` file in the root directory.
- Add your **Google Books API Key**:
  ```env
  REACT_APP_GOOGLE_BOOKS_API_KEY=your_api_key_here
  ```

### 4️⃣ Start the Development Server
```bash
npm start
```
- The application will run on `http://localhost:3000/`.

---
## 🚀 How to Use the Application
### 1️⃣ Adding a Book
- Navigate to the **Add Book** page.
- Enter the book name, author, and category.
- Upload a book cover image.
- Click **Submit** to add the book to the store.
- You will be redirected to the **Browse Books** page.

### 2️⃣ Browsing and Searching Books
- The **Browse Books** page displays books from the Google Books API and Redux store.
- Use the **Search Bar** to find books based on keywords.
- Click on a book to view more details.

### 3️⃣ Viewing Book Details
- Click on a book card to open the details page.
- View the book's title, author, description, and cover image.
- Use the **Back** button to return to the browse page.

---
## 🔧 Project Structure
```plaintext
📂 online-library-system
│── 📂 src
│   ├── 📂 components
│   │   ├── AddBook.js    # Add Book Component
│   │   ├── BrowseBooks.js # Browse Books Component
│   │   ├── BookDetails.js # Book Details Component
│   │   ├── Navbar.js      # Navigation Bar
│   ├── 📂 redux
│   │   ├── store.js       # Redux Store
│   │   ├── bookSlice.js   # Redux Slice for Books
│   ├── 📂 pages
│   │   ├── Home.js        # Home Page
│   │   ├── AddBookPage.js # Add Book Page
│   │   ├── BrowsePage.js  # Browse Books Page
│   ├── App.js            # Main Application File
│   ├── index.js          # Entry Point
│── 📄 package.json
│── 📄 .env               # API Key Configuration
│── 📄 README.md
```

---
## 📚 Technologies Used
- **React** (Frontend UI Development)
- **React Router** (Navigation)
- **Redux Toolkit** (State Management)
- **Google Books API** (Fetching Book Data)
- **Tailwind CSS** (Styling)
- **JavaScript** (Core Logic)

---
## 📌 Future Enhancements
- Implement **Local Storage** for persistence.
- Add a **User Authentication System**.
- Introduce **Book Categories and Filters**.
- Enable **Editing and Deleting Books**.

---
## 🤝 Contributing
Feel free to contribute by creating issues or submitting pull requests.

---
## 📄 License
This project is **open-source** under the MIT License.

---
## 📞 Contact
For any inquiries, reach out via:
📧 Email: your-email@example.com  
🔗 GitHub: [your-username](https://github.com/your-username)

