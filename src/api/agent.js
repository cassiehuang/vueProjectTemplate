import axios from 'axios';

const getAgents = () => {
  return axios.get('/api/agents');
}
const getAgent = (id) => {
  return axios.get(`/api/agents/${id}`);
}
const updateAgent =  (id, modifiedObj) => {
  const data = {
    "headers": {
      "Content-Type": "application/json"
    },
    "body": modifiedObj
  }
  return axios.put(`/api/agents/${id}`, data);
}

export {
  getAgent,
  getAgents,
  updateAgent,
}
