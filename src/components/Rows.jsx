
export const Rows = ({ data }) => {
  return (
    <tr>
      <th scope="row">{data.id_usuario}</th>
      <td>{data.nombre + ' ' + data.a_paterno + ' ' + data.a_materno}</td>
      <td>{data.email}</td>
    </tr>
  )
}
