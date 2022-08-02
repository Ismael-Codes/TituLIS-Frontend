

export const useFetchPost = ({ url, data }) => {

  //^ Test
  // const { data, isLoading, hasError } = useFetch('https://express-with-vercel-l1hm0yhtz-ismael-codes.vercel.app/api/getUsers')
  // const { data, isLoading, hasError } = useFetch('https://restserver-node-brian.herokuapp.com/api/usuarios/')
  // console.log(data);

  //* Post request
  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(res => console.log(res));
  };
  //^ Test

  return { handleSubmit }
}