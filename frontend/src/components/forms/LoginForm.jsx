  import { useState } from 'react'
  import { Link } from 'react-router-dom'


  export default function LoginForm({ onSubmit }) {


      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')


    function handleSubmit(e) {
      e.preventDefault()
      onSubmit(email, password)

    }


  return (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Senha"
              className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />


            <div className="flex gap-3 mt-2">
              <button
                type="submit"
                className="flex-1 bg-yellow-400 text-blue-950 font-bold py-3 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                Logar
              </button>
              <Link
                to="/register"
                className="flex-1 text-center border-2 border-blue-950 text-blue-950 font-bold py-3 rounded-lg hover:bg-blue-950 hover:text-white transition-colors"
              >
                Registrar
              </Link>
            </div>
          </form>
  )
}
