const { obterPessoas } = require('./service')

Array.prototype.meuReduce = function(callback, valorInicial) {
    let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0] 
    for (let i = 0; i <= this.length - 1; i++) {
        valorFinal = callback(valorFinal, this[i], this)
    }
    return valorFinal
}

async function main() {
    try {
        const { results } = await obterPessoas('a')
        const pesos = results.map(item => parseInt(item.height))
        console.log('PESOS', pesos)
        
        // const total = pesos.reduce((anterior, proximo) => anterior + proximo, 0)
        // console.log('TOTAL', total)

        const minhaLista = [
            ['Leo', 'Conti'],
            ['Erick', 'Wendel'],
            ['Pokemon', 'Pikachu']
        ]
        const total = minhaLista.meuReduce((anterior, proximo) => {
            return anterior.concat(proximo)
        }, []).join(', ')
        console.log('TOTAL', total)
        
        
    } catch(error) {
        console.error(`DEU RUIM`)
    }
}

main()