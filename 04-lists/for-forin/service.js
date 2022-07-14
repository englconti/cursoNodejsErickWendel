const axios = require('axios');
const URL = `https://swapi.dev/api/people`

async function obterPessoas(nome) {
    const url = `${URL}/?search=${nome}&format=json`;
    const response = await axios.get(url);
    return response.data
}

// obterPessoas('luke')
// .then(function(resultado) {
//     console.log("Resultado foi: ", resultado)
// })
// .catch(function(error) {
//     console.error("DEU ERRO", error)
// })

module.exports = {
    obterPessoas
}

