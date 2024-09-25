const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3000;

function readUsersFromFile(){
    if (fs.existsSync('users.json')) {
        const data = fs.readFileSync('users.json', 'utf8');
        return JSON.parse(data);
    }
    return [];
}

function writeUsersToFile(users){
    fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
}

let users = readUsersFromFile();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'src')));

app.post('/click', (req, res) => {
    const user = req.body; 
    console.log('new user: ', user);
    users.push(user);
    writeUsersToFile(users);

    res.sendStatus(200); 
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});