import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = (url) => {

  const [state, setState] = useState({
    data: {},
    isLoading: true,
    hasError: null,
  })

  let data = {}


  const getFetch = async () => {

    setState({ ...state, isLoading: true })

    await axios.get(url)
      .then((response) => {
        data = response.data
      })
      .catch((error) => {
        console.log(error);
      });

    // const data = await resp.json();

    setState({
      data,
      isLoading: false,
      hasError: null,
    })
  }

  useEffect(() => {
    getFetch();
  }, [url])

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  };
}
