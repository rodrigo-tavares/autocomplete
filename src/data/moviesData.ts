import axios from "axios";
import { apiKey, apiUrl } from "./env";

const getMovies = async () =>
  axios
    .get(`${apiUrl}/character?limit=100`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
    .then((response) => {
      return response.data;
    });

export { getMovies };
