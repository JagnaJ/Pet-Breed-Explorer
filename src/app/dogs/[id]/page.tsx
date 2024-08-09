'use client';

import { notFound } from 'next/navigation';
import { fetchDogBreedById } from '@/services/api';
import BreedDetails from '@/components/BreedDetails';

interface Props {
  params: {
    id: string;
  };
}

const DogBreedPage = async ({ params }: Props) => {
  const { id } = params;

  try {
    const breed = await fetchDogBreedById(id);
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

export default DogBreedPage;

