import axios from 'axios';
import { Book } from '../interfaces/books.interface';
export const getBooks = async (page: number): Promise<Book[]> => {
  const data = (await axios.get(`http://localhost:3000/books?_page=${page}`)).data;
  return data;
};
