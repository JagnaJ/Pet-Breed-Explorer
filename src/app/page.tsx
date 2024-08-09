// src/app/page.tsx
'use client'; 
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchDogBreeds, fetchCatBreeds } from '@/services/api';

const HomePage = () => {
  const [dogBreeds, setDogBreeds] = useState([]);
  const [catBreeds, setCatBreeds] = useState([]);

  useEffect(() => {
    const loadBreeds = async () => {
      try {
        const dogs = await fetchDogBreeds();
        const cats = await fetchCatBreeds();
        setDogBreeds(dogs);
        setCatBreeds(cats);
      } catch (error) {
        console.error('Error loading breeds:', error);
      }
    };
    loadBreeds();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Pet Breed Explorer</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dogBreeds.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Dog Breeds</h2>
            {dogBreeds.map((breed: any) => (
              <Link key={breed.id} href={`/dogs/${breed.id}`} className="block border p-4 rounded-lg hover:shadow-lg transition-shadow">
                <img
                  src={breed.image?.url || '/placeholder.jpg'}
                  alt={breed.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold">{breed.name}</h2>
              </Link>
            ))}
          </div>
        )}
        {catBreeds.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Cat Breeds</h2>
            {catBreeds.map((breed: any) => (
              <Link key={breed.id} href={`/cats/${breed.id}`} className="block border p-4 rounded-lg hover:shadow-lg transition-shadow">
                <img
                  src={breed.image?.url || '/placeholder.jpg'}
                  alt={breed.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold">{breed.name}</h2>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
