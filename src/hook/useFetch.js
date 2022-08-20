import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = (url) => {

  const [state, setState] = useState({
    data: {},
    isLoading: true,
    hasError: false,
  })

  let data = {}
  let hasError = false

  const getFetch = async () => {

    setState({ ...state, isLoading: true })

    await axios.get(url)
      .then((response) => {
        data = response.data
      })
      .catch((error) => {
        hasError = true;
      });

    // const data = await resp.json();

    setState({
      data,
      isLoading: false,
      hasError,
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
