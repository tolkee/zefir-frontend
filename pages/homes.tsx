import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { HomeList } from '../components/HomeList';
import { Layout } from '../components/Layout';
import { AnimatedLoader } from '../components/AnimatedLoader';

const Homes: NextPage = () => {
  const [homes, setHomes] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHomes() {
      try {
        const response = await fetch('api/homes');

        if(response.status === 200) {
          const fetchedHomes = await response.json();
          setHomes(fetchedHomes);
        }
      } finally {
        // even if there is an error on the fetch, remove the loader and just print the no-home message
        setLoading(false);
      }
    }

    fetchHomes();
  }, []);

  if (isLoading) return <AnimatedLoader />
  if (!homes) return <p>No home to show, please reload the page!</p>

  return (
    <Layout>
      <HomeList homes={homes} />
    </Layout>
  );
};


export default Homes;
