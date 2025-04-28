import { FormEvent } from "react";

interface VisitorFormProps {
  username: string;
  setUsername: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  error?: string;
}

export default function VisitorForm({ username, setUsername, password, setPassword, handleSubmit, error }: VisitorFormProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Registro de Visitantes
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Usuario:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Ingresar
          </button>
        </div>
      </form>
      {error && (
        <p className="text-red-500 text-xs italic mt-4">{error}</p>
      )}
    </div>
  );
}