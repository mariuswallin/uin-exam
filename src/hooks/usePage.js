import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getPage } from '../utils/pageService';

export const usePage = (url) => {
  const { slug } = useParams();
  const [status, setStatus] = useState('initial');
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setStatus('loading');
      try {
        const page = await getPage(url || slug);
        setData(page);
        setStatus('initial');
      } catch (error) {
        setStatus('error');
        setData(error);
      }
    };
    fetchDataAsync();
  }, [url, slug]);

  return { status, data };
};
