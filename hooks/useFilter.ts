import { useMemo } from 'react';

// Hook used to filter a home list by address
export default function useFilter(homes: Home[], filter: string): Home[] {
  const filteredHomes = useMemo(()=> {
    return homes.filter((h) => h.address.toLowerCase().includes(filter.toLowerCase()))
  }, [homes, filter]);

  return filteredHomes;
};