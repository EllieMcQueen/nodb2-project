const signs = require('./data.json');
let id = 12;

module.exports = {
    getSigns: (req, res) => {
        res.status(200).send(signs);
    },
    addSign: (req, res) => {
        const { sign } = req.body;
        if(!sign) {
            res.status(405).send('Missing sign input.');
        } else {
            const newSign = {
                id,
                sign
            };
            signs.push(newSign);
            id++;
            res.status(200).send(signs);
        }
    },
    deleteSign: (req, res) => {
        const {id} = req.params;
        const index = signs.findIndex(sign => sign.id === +id);
        if(index === -1){
            res.status(404).send('Sign not found')
        } else {
            signs.splice(index, 1);
            res.status(200).send(signs);
        }
    }
}