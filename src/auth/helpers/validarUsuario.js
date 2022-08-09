export const validarUsuario = (valid = false, email = '', data = '', userType = 2) => {

  const { message = ' ' } = data;

  /* for (let i = 0; i < message.length; i++) {
    (message[i].email === email) ? valid = true : valid;
  } */

  for (let i = 0; i < message.length; i++) {
    if (message[i].email === email) {

      console.log(message[i])
      userType = message[i].email.id_tipoUsuario
      valid = true
    }
  }

  return { valid, userType };
}