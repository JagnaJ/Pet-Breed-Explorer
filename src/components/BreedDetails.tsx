import React from 'react';

import { Breed } from '@/types/breed';

interface BreedDetailsProps {
  breed: Breed;
}

const BreedDetails: React.FC<BreedDetailsProps> = ({ breed }) => {
  if (!breed) return <p>Breed not found</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{breed.name}</h1>
      {breed.image && (
        <img
          src={breed.image?.url || '/placeholder.jpg'}
          alt={breed.name}
          className="w-full h-auto rounded-md mb-4"
        />
      )}
      {breed.temperament && (
        <p>
          <strong>Temperament:</strong> {breed.temperament}
        </p>
      )}

      {breed.origin && (
        <p>
          <strong>Origin:</strong> {breed.origin}
        </p>
      )}

      {breed.life_span && (
        <p>
          <strong>Life Span:</strong> {breed.life_span}
        </p>
      )}
    </div>
  );
};

export default BreedDetails;