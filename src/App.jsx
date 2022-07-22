import { useFetch } from './hooks/useFetch'
import { LoadingQuote } from './components/LoadingQuote';
import { Rows } from "./components/Rows";

export const App = () => {

  const { data, isLoading, hasError } = useFetch(`https://express-with-vercel-l1hm0yhtz-ismael-codes.vercel.app/api/getUsers`)

  const { status, message } = data;

  return (
    <>
      <h1 className="text-center">Usuarios</h1>
      <hr />

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {
            isLoading
              ? (
                <LoadingQuote />
              )
              : (
                message.map((data) => (
                  < Rows key={data.id_usuario} data={data} />
                ))
              )
          }
        </tbody>
      </table>
    </>
  )
}

