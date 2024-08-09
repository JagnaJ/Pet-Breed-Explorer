'use client';

import BreedDetails from '@/components/BreedDetails';

const CatBreedPage = ({ params }: { params: { id: string } }) => {
  return <BreedDetails id={params.id} isCat={true} />;
};

export default CatBreedPage;
