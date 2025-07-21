import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import mockApi from "../api/mockApi";
import { FileQuestionMark } from "lucide-react";

const initialState = {
  songs: [],
  currentSong: null,
  loading: false,
  error: null,
  pagination: { currentPage: 1, totalPages: 0, totalItems: 0, itemsPerPage: 5 },
};

export const fetchSongs = createAsyncThunk(
  "songs/fetchSongs",
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const response = await mockApi.getSongs({ page, limit });
      return response;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error
          ? error.message
          : `Something bad happened ${error}`,
      );
    }
  },
);

export const fetchSong = createAsyncThunk(
  "songs/fetchSong",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await mockApi.getSong({ id });
      return response;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error
          ? error.message
          : `Something bad happened ${error}`,
      );
    }
  },
);

export const createSong = createAsyncThunk(
  "songs/createSong",
  async (formData, { rejectWithValue }) => {
    console.log(formData);
    try {
      const response = await mockApi.makeSong(formData);
      return response;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error
          ? error.message
          : `Something bad happened ${error}`,
      );
    }
  },
);

export const updateSong = createAsyncThunk(
  "songs/updateSong",
  async ({ id, songData }, { rejectWithValue }) => {
    try {
      const updatedSong = await mockApi.updateSong(id, songData);
      return updatedSong;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error
          ? error.message
          : `Something bad happened ${error}`,
      );
    }
  },
);

export const deleteSong = createAsyncThunk(
  "songs/deleteSong",
  async (id, { rejectWithValue }) => {
    try {
      const deleteResp = await mockApi.deleteSong(id);
      return id;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error
          ? error.message
          : `Something bad happened ${error}`,
      );
    }
  },
);
export const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setNowSong: (state, action) => {
      state.currentSong = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    setPage: (state, action) => {
      state.pagination.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        ((state.loading = true), (state.error = null));
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.songs = action.payload.data;
        // state.pagination = action.payload.meta;
        state.pagination = {
          // ...state.pagination,
          currentPage: action.payload.meta.currentPage,
          totalPages: action.payload.meta.totalPages,
          totalItems: action.payload.meta.totalItems,
          itemsPerPage: action.payload.meta.itemsPerPage,
          // ...state.pagination,
          // totalItems: action.payload.meta.totalItems,
          // totalPages: Math.ceil(
          //   action.payload.meta.totalItems / state.pagination.meta.itemsPerPage,
          // ),
        };
        state.loading = false;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(fetchSong.pending, (state) => {
        ((state.loading = true), (state.error = null));
      })
      .addCase(fetchSong.fulfilled, (state, action) => {
        state.currentSong = action.payload.data;
        state.loading = false;
      })
      .addCase(fetchSong.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(createSong.pending, (state) => {
        ((state.loading = true), (state.error = null));
      })
      .addCase(createSong.fulfilled, (state, action) => {
        // state.songs = [...state.songs, action.payload];
        // state.pagination.totalItems += 1;
        state.loading = false;
      })
      .addCase(createSong.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
    builder
      .addCase(updateSong.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updateSong.fulfilled, (state, action) => {
        state.songs = state.songs.map((song) => {
          return song.id === action.payload ? action.payload : song;
        });
        state.currentSong = action.payload;
        state.loading = false;
      })
      .addCase(updateSong.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
    builder
      .addCase(deleteSong.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteSong.fulfilled, (state, action) => {
        state.songs = state.songs.filter((song) => {
          return song.id !== action.payload;
        });
        state.currentSong = action.payload;
        state.loading = false;
      })
      .addCase(deleteSong.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { setNowSong, clearError, setPage } = songSlice.actions;
export default songSlice.reducer;
