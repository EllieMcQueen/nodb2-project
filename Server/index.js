const express = require('express');
//const session = require('express-session');
const serverPort = 4000
const app = express();

app.use(express.json());




app.listen(4000, () => console.log('Server is running on 4000'));