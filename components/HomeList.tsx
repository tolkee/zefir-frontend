import { HomeCard } from './HomeCard';

export const HomeList = ({ homes }: { homes: Home[] }) =>
  <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4 my-4">
    {homes.map(home => <HomeCard key={home.id} {...home} />)}
  </div>

