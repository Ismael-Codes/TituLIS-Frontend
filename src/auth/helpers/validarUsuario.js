export const validarUsuario = (valid = false, email = '', data = '') => {

  const { usuarios } = data

  for (let i = 0; i < data.total; i++) {
    (usuarios[i].correo === email) ? valid = true : valid;
  }
  return valid;
}