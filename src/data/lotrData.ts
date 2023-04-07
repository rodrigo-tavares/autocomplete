import axios from "axios";
import config from "../ts/interfaces/config";
import { Response } from "../ts/interfaces/movie";

const getMovies = async (): Promise<Response | undefined> => {
  try {
    const response = await axios.get<Response>(
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

const getMoviesFromJson = async (): Promise<Response | undefined> => {
  try {
    const response = await axios.get<Response>("./data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return response.data;
  } catch (error: any) {
    return error;
  }
};

export { getMovies, getMoviesFromJson };
