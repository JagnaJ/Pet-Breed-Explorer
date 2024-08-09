'use client'; 

import { useEffect, useState } from 'react';
import { fetchDogBreedById, fetchCatBreedById } from '@/services/api';

const BreedPage = ({ params }: { params: { id: string } }) => {
  const [breed, setBreed] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [isCat, setIsCat] = useState<boolean | null>(null); 
  const { id } = params;

  useEffect(() => {
    const checkIfCat = async () => {
      try {
        const response = await fetch(`https://api.thecatapi.com/v1/breeds/${id}`, {
          headers: {
            'x-api-key': process.env.NEXT_PUBLIC_CAT_API_KEY!,
          },
        });
        if (response.ok) {
          setIsCat(true);
        } else {
          setIsCat(false);
        }
      } catch (error) {
        setIsCat(false); 
      }
    };

    checkIfCat();
  }, [id]);

  useEffect(() => {
    const fetchBreed = async () => {
      try {
        let data: any;

        if (isCat === null) {
          return; 
        }

        if (isCat) {
          data = await fetchCatBreedById(id);
        } else {
          data = await fetchDogBreedById(id);
        }

        if (data) {
          setBreed(data);
        } else {
          setError('Breed not found');
        }
      } catch (error) {
        setError('Error fetching breed');
        console.error('Error fetching breed:', error);
      }
    };

    fetchBreed();
  }, [id, isCat]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!breed) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{breed.name}</h1>
      <img
        src={breed.image?.url || '/placeholder.jpg'}
        alt={breed.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <p><strong>Origin:</strong> {breed.origin}</p>
      <p><strong>Life Span:</strong> {breed.life_span}</p>
      <p><strong>Temperament:</strong> {breed.temperament}</p>
      <p><strong>Height:</strong> {breed.height?.imperial} inches</p>
      <p><strong>Weight:</strong> {breed.weight?.imperial} lbs</p>
    </div>
  );
};

export default BreedPage;
