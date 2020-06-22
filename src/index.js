const express = require('express');

const app = express();

const PORT = 5000;

app.get('/', (req, res) => res.send('Starting the visualizeCS project!'));

app.listen(PORT, () => console.log(`VisualizeCS backend listening on ${PORT}`));