import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AdvertisementSpace } from './advertisement-space';

export default function FetchApi() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(process.env.REACT_APP_GARLAND_BACKEND_URL)
      .then((res) => {
        setData(res.data)
      });
  }, []);
  if (!data) return null;
  return (
    <div>
      <AdvertisementSpace advertisements={data.advertisements} />
    </div>
  );
}
