import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-blue-950 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md flex flex-col gap-6">

        <h1 className="text-3xl font-bold text-blue-950">Login</h1>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
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

      </div>
    </div>
  )
}
