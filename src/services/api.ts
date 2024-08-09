export async function fetchCatBreeds() {
  const response = await fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_CAT_API_KEY!,
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

export async function fetchCatBreedById(id: string) {
  const response = await fetch(`https://api.thecatapi.com/v1/breeds/${id}`, {
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_CAT_API_KEY!,
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

export async function fetchDogBreeds() {
  const response = await fetch('https://api.thedogapi.com/v1/breeds', {
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_DOG_API_KEY!,
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

export async function fetchDogBreedById(id: string) {
  const response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`, {
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_DOG_API_KEY!,
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}
