import React, { useState } from 'react';
import { addNode } from '../services/api';

const NodeManager = () => {
    const [nodeName, setNodeName] = useState('');
    const [nodeIP, setNodeIP] = useState('');
    const [message, setMessage] = useState('');

    const handleAddNode = async () => {
        try {
            const response = await addNode(nodeName, nodeIP);
            setMessage(response.message);
        } catch (error) {
            setMessage(error.error);
        }
    };

    return (
        <div>
            <h2>Add Node</h2>
            <input
                type="text"
                value={nodeName}
                onChange={(e) => setNodeName(e.target.value)}
                placeholder="Node Name"
            />
            <input
                type="text"
                value={nodeIP}
                onChange={(e) => setNodeIP(e.target.value)}
                placeholder="Node IP"
            />
            <button onClick={handleAddNode}>Add Node</button>
            <p>{message}</p>
        </div>
    );
};

export default NodeManager;
