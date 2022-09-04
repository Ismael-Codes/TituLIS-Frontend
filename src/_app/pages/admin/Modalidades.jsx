import { Alert } from "@mui/material"
import { url } from "../../../config"
import { useFetch } from "../../../hook"
import { LoadingSpinner2 } from "../student/components"
import { MesaDeTrabajoMo } from "./components"

export const Modalidades = () => {

  const { data, isLoading, hasError } = useFetch(`${url}/api/getModalidades`)

  const { message } = data;

  return (
    <>
      {
        (isLoading)
          ? <LoadingSpinner2 />
          : (!hasError) ? <MesaDeTrabajoMo message={message} /> : <Alert variant="filled" severity="error">Ocurrió un error, inténtelo mas tarde!!</Alert>
      }
    </>
  )
}
