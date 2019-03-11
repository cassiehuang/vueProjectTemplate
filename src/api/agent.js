import axios from 'axios';

const getAgents = () => {
  return axios.get('/api/agents');
}
const getAgent = (id) => {
  return axios.get(`/api/agents/${id}`);
}
const updateAgent =  (id, modifiedObj) => {
  return axios.put(`/api/agents/${id}`, modifiedObj);
}

export {
  getAgent,
  getAgents,
  updateAgent,
}
