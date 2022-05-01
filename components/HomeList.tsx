import { useMemo, useState } from 'react';
import { HomeCard } from './HomeCard';
import { HomeModal } from './HomeModal';

export const HomeList = ({ homes }: { homes: Home[] }) =>{
  const [selectedHome, setSelectedHome] = useState<Home | null>(null);
  const isModalVisible = useMemo(() => selectedHome !== null, [selectedHome])

  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4 my-4">
      {homes.map(home =>
        <div key={home.id} className="z-60 cursor-pointer modal-close" onClick={() => setSelectedHome(home)}>
          <HomeCard key={home.id} {...home} />
        </div>
      )}

      {selectedHome && <HomeModal home={selectedHome} isVisible={isModalVisible} onClose={() => setSelectedHome(null)}/>}
    </div>
  );
}
