import React from 'react';

interface BreedDetailsProps {
  breed: {
    id: string;
    name: string;
    image?: { url: string };
    temperament?: string;
    origin?: string;
    life_span?: string;
    // добавьте любые другие свойства, которые нужны
  };
}

const BreedDetails: React.FC<BreedDetailsProps> = ({ breed }) => {
  if (!breed) return <p>Breed not found</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{breed.name}</h1>
      {breed.image && <img src={breed.image.url} alt={breed.name} className="w-full h-auto rounded-md mb-4" />}
      <p><strong>Temperament:</strong> {breed.temperament}</p>
      <p><strong>Origin:</strong> {breed.origin}</p>
      <p><strong>Life Span:</strong> {breed.life_span}</p>
      {/* добавьте другие поля, если нужно */}
    </div>
  );
};

export default BreedDetails;
