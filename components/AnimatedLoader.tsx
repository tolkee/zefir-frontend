import Image from 'next/image';

export const AnimatedLoader = ({ size = 200 }: { size?: number }) => (
  <div className="z-0 flex items-center justify-center w-full h-screen bg-white">
    <div className="z-10 animate-pulse animate-bounce">
      <Image  src="/zefir-logo.svg" alt="zefir-logo" height={size} width={size} />
    </div>
  </div>
);
