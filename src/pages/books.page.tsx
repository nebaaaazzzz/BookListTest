import PullToRefresh from 'react-pull-to-refresh';
import { useInView } from 'react-intersection-observer';
import { getBooks } from '../service/books';
import { useInfiniteQuery } from 'react-query';
import { Fragment, useEffect } from 'react';
import { Book } from '../interfaces/books.interface';
import BookCard from '../components/molecules/BookCard';
function Books() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const { data, fetchNextPage, isLoading, isFetching, isFetchingNextPage, refetch } = useInfiniteQuery(
    ['books'],
    ({ pageParam = 1 }) => {
      return getBooks(pageParam);
    },
    {
      getNextPageParam: (lastPage, pages) => {
        if (Array.isArray(lastPage) && lastPage.length) {
          return pages.length + 1;
        }
      },
    },
  );
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
  const handleRefresh = async () => {
    await refetch();
  };
  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <div className="flex flex-col items-center mt-10">
        <h1 className="font-bold text-2xl">Books</h1>
        <div className="flex flex-wrap justify-center gap-1 w-1/2 ">
          {data?.pages.map((page, index) => (
            <Fragment key={index}>
              {page.map((book: Book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </Fragment>
          ))}
        </div>
      </div>
      {(isLoading || isFetchingNextPage || isFetching) && <div>Fetching...</div>}
      <div ref={ref} className="mb-10"></div>
    </PullToRefresh>
  );
}

export default Books;
