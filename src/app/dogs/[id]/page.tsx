'use client';

import BreedDetails from '@/components/BreedDetails';

const DogBreedPage = ({ params }: { params: { id: string } }) => {
  return <BreedDetails id={params.id} isCat={false} />;
};

export default DogBreedPage;
