import { API_KEY } from "./config";

export const fetchBooks = async (query) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.items || [];
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
};
