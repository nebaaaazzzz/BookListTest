import { Book } from '../../interfaces/books.interface';

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="max-w-xs">
      <img className="max-w-full object-contain" src="https://picsum.photos/250/300" />
      <div className="px-4">
        <p className="text-ellipsis overflow-hidden whitespace-nowrap max-w-[150px]">{book.title}</p>
        <div className="flex justify-between">
          <p className="font-bold text-red-600">{book.discountRate}%</p>
          <p className="text-black font-extrabold">${book.price}</p>
        </div>
      </div>
    </div>
  );
}
