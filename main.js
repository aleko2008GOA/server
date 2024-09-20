const express = require('express');
const path = require('path');
const app = express();


app.use(express.json());

app.use(express.static(path.join(__dirname, 'src')));

app.post('/click', (req, res) => {
    const userData = req.body; 
    console.log('Current data store:', userData); 
    res.sendStatus(200); 
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});