import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

import { DataList } from 'types/urlType';

const useInfiniteScroll = (apiUrl:string) => {
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoding] = useState(false);
  const [dataList, setDataList] = useState<DataList[]>([]);
  const preventRef = useRef(true);
  const obsTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 0.5 });
    if (obsTarget.current) observer.observe(obsTarget.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
      getOpenAPIData();
  }, [page]);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      preventRef.current = false;
      setPage((prevPage) => prevPage + 1);
    }
  };

  const getOpenAPIData = async () => {
    setIsLoding(true);

    try {
      const respons = await axios.get(apiUrl);
      const newData = respons.data.map((resData: { id: string; url: string }) => ({
        name: resData.id,
        thumbnail: resData.url,
      }));
      setDataList((prevData) => [...prevData, ...newData]);
      preventRef.current = true;
    } catch (error) {
      alert(`error: ${error}`);
    }
    setIsLoding(false);
  };


  return {
    dataList,
    isLoading,
    obsTarget,
    getOpenAPIData
  };
};

export default useInfiniteScroll;
