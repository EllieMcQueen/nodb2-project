const axios = require('axios');

module.exports = {
    mood: (req, res) => {

        const horoArray = [];
        const ran1 = Math.ceil(Math.random() * 11);
        const rand2 = Math.ceil(Math.random() * 11);
        const rand3 = Math.ceil(Math.random() * 11)

    axios.get(`http://ohmanda.com/api/horosscope/${rand1}`)
        .then (response => {
            horoArray.push(response.data);
            axios.get(`http://ohmanda.com/api/horoscope/${rand2}`)
            .then(response => {
                horoArray.push(response.data);
                axios.get(`http://ohmanda.com/api/horoscope/${rand3}`)
                .then(response => {
                horoArray.push(response.data);
                res.status(200).send(horoArray)
            })
        })
    
    })
    .catch(err => res.status(500).send(err));
}

}
