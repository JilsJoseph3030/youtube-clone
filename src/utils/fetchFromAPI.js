import axios from "axios";

const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, {
    params: { key: import.meta.env.VITE_YOUTUBE_API_KEY },
  });
  return data;
};
