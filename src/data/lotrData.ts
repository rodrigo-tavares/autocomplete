import axios from "axios";
import config from "../ts/interfaces/config";
import { RequestMovie } from "../ts/interfaces/movie";

const getMovies = async (): Promise<RequestMovie | undefined> => {
  try {
    const response = await axios.get<RequestMovie>(
      `${config.API_URL}movie?limit=100`,
      {
        headers: {
          Authorization: `Bearer ${config.API_TOKEN}`,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    return error;
  }
};

export { getMovies };
