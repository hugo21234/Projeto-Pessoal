// src/pages/LoginPage.jsx
import { useNavigate, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import LoginForm from '../components/forms/LoginForm'

export default function LoginPage() {
  const navigate = useNavigate()
  const [error, setError] = useState(null)
  const { login, auth } = useAuth()

  async function handleLogin(email, password) {
    try {
      await login(email, password)
      navigate('/dashboard')
    } catch (e) {
      setError('Invalid email or password')
      console.error('Login error:', e)
    }
  }

  if (auth.token) {
    return <Navigate to="/dashboard" replace />
  }

  return (
    <div className="min-h-screen bg-blue-950 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-blue-950">Login</h1>

        {/* Aqui a Page usa o Form */}
        <LoginForm onSubmit={handleLogin} />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </div>
  )
}
