/*
0. Obter usuário
1. Obter telefone do usuário a partir do ID
2. Obter endereço pelo usuário
*/

function obterUsuario(callback) {
    setTimeout(function() {
        return callback(null, {
            id: 1,
            nome: "aladin",
            dataNascimento: new Date()
        })
    }, 1000);
}

function obterTelefone(idUsuario, callback) {
    setTimeout(function() {
        return callback(null, {
            telefone: '1199002',
            ddd: 11
        })
    }, 2000);

}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: "dos bobos",
            numero: 0
        })
    }, 2000)
}

// function resolverUsuario(erro, usuario) {
//     console.log("usuario:", usuario)
// }

obterUsuario(function resolverUsuario(error, usuario) {
    // null || "" || 0 || NaN || Undefined === false
    if(error) {
        console.log("DEU RUIM em USUARIO", error);
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if(error1) {
            console.log("DEU RUIM em TELEFONE", error1);
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if(error2) {
                console.log("DEU RUIM em ENDEREÇO", error2);
                return;
            }

            console.log(`Nome: ${usuario.nome},\nEndereco: ${endereco.rua},\nTelefone: ${telefone.ddd}${telefone.telefone}`)
        })
    })
})

// const usuario = obterUsuario()
// const telefone = obterTelefone(usuario.id)

// console.log("usuario", usuario)
// console.log("Telefone:", telefone)