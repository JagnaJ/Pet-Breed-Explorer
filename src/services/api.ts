const catApiKey = process.env.NEXT_PUBLIC_CAT_API_KEY;
const dogApiKey = process.env.NEXT_PUBLIC_DOG_API_KEY;

export const fetchCatBreeds = async () => {
  try {
    const response = await fetch(`https://api.thecatapi.com/v1/breeds?api_key=${catApiKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cat breeds:", error);
    return [];
  }
};

export const fetchDogBreeds = async () => {
  try {
    const response = await fetch(`https://api.thedogapi.com/v1/breeds?api_key=${dogApiKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching dog breeds:", error);
    return [];
  }
};
