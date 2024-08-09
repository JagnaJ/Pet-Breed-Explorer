// src/services/api.ts
const dogApiKey = process.env.NEXT_PUBLIC_DOG_API_KEY;
const catApiKey = process.env.NEXT_PUBLIC_CAT_API_KEY;

export const fetchDogBreeds = async () => {
  try {
    const response = await fetch(`https://api.thedogapi.com/v1/breeds?api_key=${dogApiKey}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching dog breeds:', error);
    return [];
  }
};

export const fetchCatBreeds = async () => {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/breeds?api_key=${catApiKey}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cat breeds:', error);
    return [];
  }
};

export const fetchDogBreedById = async (id: string) => {
  try {
    const response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}?api_key=${dogApiKey}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching dog breed by ID:', error);
    return null;
  }
};

export const fetchCatBreedById = async (id: string) => {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/breeds/${id}?api_key=${catApiKey}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cat breed by ID:', error);
    return null;
  }
};
