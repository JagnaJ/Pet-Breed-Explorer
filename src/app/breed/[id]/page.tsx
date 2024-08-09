// src/app/breed/[id]/page.tsx

"use client";

import { useEffect, useState } from 'react';

const BreedPage = ({ params }: { params: { id: string } }) => {
  const [breed, setBreed] = useState<any>(null);
  const [imageError, setImageError] = useState<boolean>(false);
  const { id } = params;

  useEffect(() => {
    const fetchBreed = async () => {
      try {
        let url: string;

        if (id.startsWith('cat-')) {
          url = `https://api.thecatapi.com/v1/breeds/${id}`;
        } else {
          url = `https://api.thedogapi.com/v1/breeds/${id}`;
        }

        const response = await fetch(url );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setBreed(data);
      } catch (error) {
        console.error('Error fetching breed:', error);
      }
    };

    fetchBreed();
  }, [id]);

  const handleImageError = () => {
    setImageError(true);
  };

  if (!breed) return <div>Loading...</div>;

  return (
    <div>
      <h1>{breed.name}</h1>
      <img 
        src={imageError ? '/placeholder.jpg' : breed.image?.url} 
        alt={breed.name} 
        onError={handleImageError} 
        style={{ maxWidth: '100%', height: 'auto' }} 
      />
      <p>{breed.bred_for || breed.temperament}</p>
      <p>{breed.life_span}</p>
    </div>
  );
};

export default BreedPage;
