export const validarUsuario = (valid = false, email = '', data = '') => {

  const { message = ' '} = data;
  console.log(message.length);
  for (let i = 0; i < message.length; i++) {
    (message[i].email === email) ? valid = true : valid;
  }
  return valid;
}