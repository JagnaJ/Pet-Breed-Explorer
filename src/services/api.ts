// src/services/api.ts

export const fetchDogBreeds = async (): Promise<any[]> => {
  const response = await fetch('https://api.thedogapi.com/v1/breeds', {
    headers: {
      'x-api-key': 'live_saIQcFhW2OlnApiK9CogVyuqJm1yc5Yv8Pc3QF6hHZxDANo1e4En6CoJGc0cXlo1'
    }
  });
  const data = await response.json();
  return data;
};

export const fetchCatBreeds = async (): Promise<any[]> => {
  const response = await fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'x-api-key': 'live_9zrCjkJPSO8ARoIOsNAxy84NBbwj0YQzyaan5Hz26E5A3uo5b9kTODhXICcwTl0o'
    }
  });
  const data = await response.json();
  return data;
};
