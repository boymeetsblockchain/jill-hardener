import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'jilhardener1234' && password === '198809') {
        // Navigate to /profile page
        toast.success('Willkommen')
        navigate('/profile');
       
      } else {
        // Show authorization failed alert
        toast.error('Autorisierung fehlgeschlagen');
      }
      
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-full max-w-md bg-white rounded-lg shadow-lg p-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Anmeldung</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
            Benutzername
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Geben Sie Ihren Benutzernamen ein"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Passwort
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Geben Sie Ihr Passwort ein"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-lime-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Anmelden
          </button>
        </div>
      </form>
    </div>
  );
}