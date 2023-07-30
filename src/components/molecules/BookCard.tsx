import { useState } from 'react';
import { Book } from '../../interfaces/books.interface';

export default function BookCard({ book }: { book: Book }) {
  const [imageLoading, setImageLoading] = useState<boolean>(true);
  const handleImageLoaded = () => setImageLoading(false);
  return (
    <div className="max-w-xs">
      {imageLoading && (
        <div className="animate-pulse bg-gray-200 max-w-full aspect-[4/5] object-contain w-[250px] h-[400px]"></div>
      )}
      <img
        onLoad={handleImageLoaded}
        className="max-w-full w-full aspect-[4/5] object-contain"
        src={`https://picsum.photos/250/300?random=${Date.now()}`}
      />
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
