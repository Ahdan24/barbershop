import axios from "axios";

export interface RandomUser {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export const fetchRandomUsers = async (
  count: number,
): Promise<RandomUser[]> => {
  const response = await axios.get("https://randomuser.me/api/", {
    params: { results: count },
  });
  return response.data.results;
};
