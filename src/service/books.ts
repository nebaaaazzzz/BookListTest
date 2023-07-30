import axios from 'axios';
import { Book } from '../interfaces/books.interface';
import { BASE_URL } from '../constants';
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
export const getBooks = async (page: number): Promise<Book[]> => {
  const data = (await axiosInstance.get(`/books?_page=${page}`)).data;
  return data;
};
