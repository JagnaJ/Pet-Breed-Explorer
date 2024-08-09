import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDogBreeds, fetchCatBreeds } from '@/services/api';

export interface Breed {
  id: string;
  name: string;
  image?: { url: string };
  // добавьте любые другие свойства, которые нужны
}

interface BreedsState {
  dogBreeds: Breed[];
  catBreeds: Breed[];
  loading: boolean;
  error?: string;
}

const initialState: BreedsState = {
  dogBreeds: [],
  catBreeds: [],
  loading: false,
};

// Async thunks для получения данных с API
export const fetchBreeds = createAsyncThunk('breeds/fetchBreeds', async () => {
  const [dogBreeds, catBreeds] = await Promise.all([fetchDogBreeds(), fetchCatBreeds()]);
  return { dogBreeds, catBreeds };
});

const breedsSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBreeds.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBreeds.fulfilled, (state, action) => {
        state.dogBreeds = action.payload.dogBreeds;
        state.catBreeds = action.payload.catBreeds;
        state.loading = false;
      })
      .addCase(fetchBreeds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default breedsSlice.reducer;
