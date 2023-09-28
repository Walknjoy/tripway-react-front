import { useEffect, useState, useMemo, useCallback } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const reFetch = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err.response.data.error.error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return useMemo(() => ({ data, loading, error, reFetch }), [data, loading, error, reFetch]);
};

export default useFetch;
