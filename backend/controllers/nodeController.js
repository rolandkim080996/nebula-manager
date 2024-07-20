const { exec } = require('child_process');

exports.addNode = (req, res) => {
    const { nodeName, nodeIP } = req.body;
    exec(`nebula-cert sign -name ${nodeName} -ip ${nodeIP}`, (error, stdout, stderr) => {
        if (error) {
            return res.status(500).json({ error: stderr });
        }
        res.status(200).json({ message: stdout });
    });
};
