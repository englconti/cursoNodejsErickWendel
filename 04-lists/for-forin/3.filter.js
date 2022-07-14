const { obterPessoas } = require("./service");

Array.prototype.meuFilter = function(callback) {
    const lista = []
    for(index in this) {
        const item = this[index]
        const result = callback(item, index, this)
        if (!result) continue
        lista.push(item)
    }
    return lista
}

async function main() {
    try {
        const { results } = await obterPessoas('a');
        /* filter por padrão retorna um boleano para saber se mantém o valor ou não */
        // const familiaLars = results.filter(function(item) {
        //     const result = item.name.toLowerCase().indexOf("lars") !== -1
        //     return result
        // })
        console.log(`list.length: ${results.length}`);
        
        const familiaLars = results.meuFilter((item, index, list) => {
            console.log(`Index: ${index}, item.name: ${item.name}`)
            return item.name.toLowerCase().indexOf("lars") !== -1
        })
        
        const names = familiaLars.map(pessoa => pessoa.name)
        
        // for(i in names) {
        //     console.log(`${+i + 1}: ${names[i]}`);
        // }
        console.log(names)                
    } catch(error) {
        console.error('DEU RUIM', error);        
    }
}

main()