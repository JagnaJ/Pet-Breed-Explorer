'use client';

import { notFound } from 'next/navigation';
import { fetchCatBreedById } from '@/services/api';
import BreedDetails from '@/components/BreedDetails';

interface Props {
  params: {
    id: string;
  };
}

const CatBreedPage = async ({ params }: Props) => {
  const { id } = params;

  try {
    const breed = await fetchCatBreedById(id);
    if (!breed) notFound();
    return (
      <div>
        <BreedDetails breed={breed} />
      </div>
    );
  } catch (error) {
    return <p>Error loading breed</p>;
  }
};

export default CatBreedPage;
