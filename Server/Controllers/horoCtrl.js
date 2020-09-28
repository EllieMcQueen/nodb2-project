const savedHoro = []
let id = 1;

module.exports = {
    getSavedHoro: (req, res) => {
        res.status(200).send(savedHoro);
    },
    chooseHoro: (req, res) => {
        const {horoscope} = req.body;

        horoscope.id = id;
        id ++

        savedHoro.push(horoscope);
        res.status(200).send(savedHoro);
        },
    editMood: (req, res) => {
        const {id} = req.params;
        const {mood} = req.body;

        const horoscope = savedHoro.find(element => element.id === +id);
        horoscope.mood = mood;
        res.status(200).send(savedHoro);
    },
    releaseHoro: (req, res) => {
        const {id} = req.params;

        const index = savedHoro.findIndex(element => element.id === +id);
        savedHoro.splice(index, 1);
        res.status(200).send(savedHoro);
    }
    }
