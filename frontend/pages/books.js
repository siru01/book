import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Books() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', price: '' });
  const router = useRouter();

  const token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE;

  useEffect(() => {
    if (!token) {
      router.push('/login');
      return;
    }
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get(`https://book-backend-4o76.onrender.com/api/books/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBooks(res.data);
    } catch (err) {
      alert('Failed to fetch books');
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://book-backend-4o76.onrender.com/api/books/`, newBook, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNewBook({ title: '', author: '', price: '' });
      fetchBooks();
    } catch (err) {
      alert('Failed to add book');
    }
  };

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((b) => (
          <li key={b.id}>{b.title} by {b.author} - ₹{b.price}</li>
        ))}
      </ul>

      <h3>Add a Book</h3>
      <form onSubmit={handleAdd}>
        <input placeholder="Title" value={newBook.title} onChange={(e) => setNewBook({ ...newBook, title: e.target.value })} /><br />
        <input placeholder="Author" value={newBook.author} onChange={(e) => setNewBook({ ...newBook, author: e.target.value })} /><br />
        <input placeholder="Price" value={newBook.price} onChange={(e) => setNewBook({ ...newBook, price: e.target.value })} /><br />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
