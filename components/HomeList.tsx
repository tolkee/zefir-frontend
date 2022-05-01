import { useMemo, useState } from 'react';
import useFilter from '../hooks/useFilter';
import { HomeCard } from './HomeCard';
import { HomeModal } from './HomeModal';

export const HomeList = ({ homes }: { homes: Home[] }) =>{
  const [selectedHome, setSelectedHome] = useState<Home | null>(null);
  const isModalVisible = useMemo(() => selectedHome !== null, [selectedHome])

  const [filter, setFilter] = useState('');
  const filteredHomes = useFilter(homes, filter);

  return (
    <div className="my-4" >
      <input className="p-2" value={filter} onChange={(e) => setFilter(e.currentTarget.value)} placeholder="Type an address"/>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4 my-4">
        {filteredHomes.map(home =>
          <div key={home.id} className="z-60 cursor-pointer modal-close" onClick={() => setSelectedHome(home)}>
            <HomeCard key={home.id} {...home} />
          </div>
        )}
        {selectedHome && <HomeModal home={selectedHome} isVisible={isModalVisible} onClose={() => setSelectedHome(null)}/>}
      </div>
    </div>
  );
}
