import axios from "axios";

// Definisikan tipe data yang sesuai dengan struktur respons API randomuser.me
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

// Fungsi untuk mengambil data pengguna
export const fetchRandomUsers = async (
  count: number,
): Promise<RandomUser[]> => {
  const response = await axios.get("https://randomuser.me/api/", {
    params: { results: count },
  });
  return response.data.results;
};
