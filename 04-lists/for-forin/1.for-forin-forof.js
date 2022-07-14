const service = require('./service');
const searchWord = 'a';

async function main() {
    try {
        const result = await service.obterPessoas(searchWord);
        const names = [];
        
        // for NORMAL
        console.time('for');
        for (let i = 0; i <= result.results.length - 1; i++) {
            const pessoa = result.results[i].name;
            names.push(pessoa);
        }
        console.timeEnd('for');

        // forin
        console.time('forin');
        for (let i in result.results) {
            const pessoa = result.results[i].name;
            names.push(pessoa);
        }
        console.timeEnd('forin');

        // forof
        console.time('forof');
        for (pessoa of result.results) {
            names.push(pessoa.name);
        }
        console.timeEnd('forof');

        console.log('Resultados encontrados: ', names);
    } catch {
        console.error("DEU RUIM!");
    }
}

main();