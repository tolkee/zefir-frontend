import Image from 'next/image';
import { HomeField } from './HomeField';
import { Modal } from './Modal';

interface HomeModalProps {   
    home: Home,
    isVisible: boolean,
    onClose(): void
}

export const HomeModal = ({home, isVisible, onClose}: HomeModalProps) => (
  <Modal isVisible={isVisible} onClose={onClose} title={home.address}>
    <div className="w-full">
      <div className="w-full h-96 relative">
        <Image src={home.picture} layout="fill" objectFit="cover" alt="home picture" />
      </div>
      <div className="mt-4 mb-2">
        <span className="pt-4 text-base font-medium text-gray-400">{home.owner}</span>
      </div>
      <div className="mb-2">
        <HomeField label="Price" value={home.price} unit={home.currency} />
      </div>
      <div className="mb-2">
        <HomeField label="Year of construction" value={home.year || '?'} />
      </div>
      <div className="mb-2">
        <HomeField label="Surface" value={home.surface} unit="m2" />
      </div>
      <div className="mb-2">
        <HomeField label="Number of floors" value={home.floor || '?'} unit="floors" />
      </div>
      <div className="mb-2">
        <HomeField label="Number of rooms" value={home.rooms} unit="rooms" />
      </div>
    </div>
  </Modal>
);