'use client';

import { fetchDogBreeds, fetchCatBreeds } from '@/services/api';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const HomePage = () => {
  const [dogBreeds, setDogBreeds] = useState([]);
  const [catBreeds, setCatBreeds] = useState([]);

  useEffect(() => {
    const loadBreeds = async () => {
      const dogs = await fetchDogBreeds();
      const cats = await fetchCatBreeds();
      setDogBreeds(dogs);
      setCatBreeds(cats);
    };
    loadBreeds();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Pet Breed Explorer</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <h2 className="text-2xl font-semibold col-span-full">Dog Breeds</h2>
        {dogBreeds.map((breed: any, index: number) => (
          <Link
            key={index}
            href={`/dogs/${breed.id}?isCat=false`}
            className="block border p-4 rounded-lg hover:shadow-lg transition-shadow"
          >
            <img
              src={breed.image?.url || '/placeholder.jpg'}
              alt={breed.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{breed.name}</h2>
          </Link>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <h2 className="text-2xl font-semibold col-span-full">Cat Breeds</h2>
        {catBreeds.map((breed: any, index: number) => (
          <Link
            key={index}
            href={`/cats/${breed.id}?isCat=true`}
            className="block border p-4 rounded-lg hover:shadow-lg transition-shadow"
          >
            <img
              src={breed.image?.url || '/placeholder.jpg'}
              alt={breed.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{breed.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
