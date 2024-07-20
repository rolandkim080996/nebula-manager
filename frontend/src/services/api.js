import axios from 'axios';

const API_URL = 'http://localhost:5000/api/nodes';

export const addNode = async (nodeName, nodeIP) => {
    try {
        const response = await axios.post(`${API_URL}/add`, { nodeName, nodeIP });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
