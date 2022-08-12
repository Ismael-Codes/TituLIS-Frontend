export const validarUsuario = (valid = false, email, data, userType) => {

  const { message = ' ' } = data;
  
  for (let i = 0; i < message.length; i++) {
    if (message[i].email === email) {
      userType = parseInt(message[i].id_tipoUsuario)
      valid = true
    }
  }

  return { valid, userType };
}