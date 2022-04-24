import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/'
});

export const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
}

export const deleteData = async (endpoint) => {
  await api.delete(endpoint);
}

export const createData = async (endpoint, body) => {
  await api.post(endpoint, body);
}

export const updateData = async (endpoint, body) => {
  const { data } = await api.put(endpoint, body);
  return data;
}

export default api;
