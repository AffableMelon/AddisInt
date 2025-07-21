import axios from "axios";
const base = process.env.API_BASE_URL;
const url = `${base}/songs`;
const getSongs = async ({ page, limit }) => {
  try {
    const songs = await axios.get(url, {
      params: { _page: page, _limit: limit },
    });
    const totalItems = songs.headers["x-total-count"];
    const totalPages = Math.ceil(totalItems / limit);
    console.log(songs.data);
    return {
      data: songs.data,
      meta: {
        currentPage: page,
        totalPages: totalPages,
        totalItems: totalItems,
        itemsPerPage: limit,
      },
    };
  } catch (error) {
    console.error("Error fetching stuff", error);
    throw error;
  }
};

const getSong = async ({ id }) => {
  try {
    const song = await axios.get(`${url}/${id}`);
    console.log(song.data);
    return song.data;
  } catch (error) {
    console.error("Error fetching stuff", error);
    throw error;
  }
};

const makeSong = async (formdata) => {
  try {
    console.log(formdata);
    const resp = await axios.post(url, formdata);
    console.log(resp);
    if (resp.status == 201) {
      return resp.data;
    }
  } catch (error) {
    console.error("Error Posting Stuff", error);
    throw error;
  }
};

const updateSong = async (id, data) => {
  try {
    console.log(data, id);
    const resp = await axios.put(`${url}/${id}`, data);
    console.log(resp);
    if (resp.status == 200 || resp.status == 204) {
      return resp.data;
    }
  } catch (error) {
    console.error("Error Posting Stuff", error);
    throw error;
  }
};

const deleteSong = async (id) => {
  try {
    console.log(id);
    const resp = await axios.delete(`${url}/${id}`);
    console.log(resp);
    if (resp.status == 200 || resp.status == 204) {
      return id;
    }
  } catch (error) {
    console.error("Error Posting Stuff", error);
    throw error;
  }
};

export default { getSongs, getSong, makeSong, updateSong, deleteSong };
