import { ReactNode, useEffect, useState } from 'react';

interface Props {
  fetchMoreData: () => void;
  hasMore: boolean;
  children: ReactNode;
}

const InfiniteScroll: React.FC<Props> = ({ fetchMoreData, hasMore, children }) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchMore();
  }, [isFetching]);

  function handleScroll() {
    if (!hasMore || isFetching) return;

    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setIsFetching(true);
    }
  }

  function fetchMore() {
    fetchMoreData();
    setIsFetching(false);
  }

  return <div>
    {children}
    {isFetching && <p>Loading...</p>}
  </div>;
};

export default InfiniteScroll;
