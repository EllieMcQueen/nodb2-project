const express = require('express');
//const session = require('express-session');
const ctrl = require('./Controllers/signCtrl');

const serverPort = 4000;
const app = express();

app.use(express.json());

app.get('/api/signs', ctrl.getSigns);
app.post('/api/signs', ctrl.addSign);
app.delete('/api/signs', ctrl.deleteSign);

app.listen(4000, () => console.log('Server is running on 4000'));