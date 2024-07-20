const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodeRoutes = require('./routes/nodes');

app.use(bodyParser.json());
app.use('/api/nodes', nodeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
