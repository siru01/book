import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // 1️⃣ Attempt to log in
      const res = await axios.post('https://book-backend-4o76.onrender.com/api/token/', {
        username,
        password,
      });

      // 2️⃣ On success: Save token and redirect
      localStorage.setItem('access_token', res.data.access);
      router.push('/books');
    } catch (err) {
      // 3️⃣ If login fails, ask user if they want to register
      const retry = confirm('Login failed. Do you want to create a new account instead?');
      if (retry) {
        try {
          // 4️⃣ Register the user
          await axios.post('https://book-backend-4o76.onrender.com/api/register/', {
            username,
            email,
            password,
          });

          alert('✅ Account created successfully. Now login again.');
        } catch (regErr) {
          alert('❌ User creation failed. Please try with different credentials.');
        }
      }
    }
  };

  return (
    <div>
      <h2>Login / Register</h2>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br />
        <input
          placeholder="Email (for new users)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <button type="submit">Login / Create</button>
      </form>
    </div>
  );
}
