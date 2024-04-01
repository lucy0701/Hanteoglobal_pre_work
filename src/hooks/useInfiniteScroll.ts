import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

import { Data } from 'types/dataType';

const useInfiniteScroll = (apiUrl: string) => {
  const [page, setPage] = useState(0);
  const [dataList, setDataList] = useState<Data[]>([]);
  const preventRef = useRef(true);
  const obsTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getOpenAPIData();
    const observer = new IntersectionObserver(handleObserver, { threshold: 0.5 });
    if (obsTarget.current) observer.observe(obsTarget.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // 100개 제한 (푸터 확인 용)
    if (page > 0 && dataList.length < 60) getOpenAPIData();
  }, [page]);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      preventRef.current = false;
      setPage((prevPage) => prevPage + 1);
    }
  };

  const getOpenAPIData = async () => {
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
  };

  return {
    dataList,
    obsTarget,
    getOpenAPIData,
  };
};

export default useInfiniteScroll;
