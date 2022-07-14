function obterUsuario() {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            // return reject(new Error("Deu RUIM com usuario!!!"));
            return resolve({
                id: 1,
                nome: "aladin",
                dataNascimento: new Date()
            });
        }, 1000);
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            // return reject(new Error("Deu RUIM com telefone!!!"));
            return resolve({
                telefone: '1199002',
                ddd: 11
            })
        }, 2000);
    })
}

function obterEndereco(idUsuario, callback) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            // return reject(new Error("Deu RUIM com Endereço!!!"));
            return resolve({
                rua: "dos bobos",
                numero: 0
            })
        }, 2000)
    })
}

main();

async function main() {
    try {
        console.time("medida-promise");
        const usuario = await obterUsuario();
        const telefoneAndEndereco = await Promise.all([
            obterTelefone(usuario.id),
            obterEndereco(usuario.id)
        ])
        console.timeEnd("medida-promise");
        console.log(`
            usuario: ${usuario.nome[0].toUpperCase()}${usuario.nome.slice(1)},
            telefone: ${telefoneAndEndereco[0].ddd} ${telefoneAndEndereco[0].telefone},
            endereco: Rua ${telefoneAndEndereco[1].rua} numero ${telefoneAndEndereco[1].numero}
        `)
    } catch (error) {
        console.log("DEU ERRO!! -> ", error);
    }

}

