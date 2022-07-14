/*
0. Obter usuário
1. Obter telefone do usuário a partir do ID
2. Obter endereço pelo usuário
*/

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

const usuarioPromise = obterUsuario();

usuarioPromise
    .then(function (usuario) {
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result) {
                return { 
                    usuario: { 
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
            .catch(function(errorTelefone) {
                console.error("ERRO COM TELEFONE", errorTelefone)
            })
    })
    .then(function(usuarioComTelefone) {
        return obterEndereco(usuarioComTelefone.usuario.id)
            .then(function resolverEndereco(result) {
                return {
                    usuario: usuarioComTelefone.usuario,
                    telefone: usuarioComTelefone.telefone,
                    endereco: result
                }
            })
            .catch(function(errorEndereco) {
                console.error("ERRO COM ENDEREÇO", errorEndereco);
            })
    })
    .then(function(usuarioCompleto) {
        console.log("Usuario completo: ", usuarioCompleto);
    })
    .catch(function(error) {
        console.error(`ERRO: ${error}`);
    })




// function resolverUsuario(erro, usuario) {
//     console.log("usuario:", usuario)
// }

// obterUsuario(function resolverUsuario(error, usuario) {
//     // null || "" || 0 || NaN || Undefined === false
//     if(error) {
//         console.log("DEU RUIM em USUARIO", error);
//         return;
//     }

//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
//         if(error1) {
//             console.log("DEU RUIM em TELEFONE", error1);
//             return;
//         }

//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
//             if(error2) {
//                 console.log("DEU RUIM em ENDEREÇO", error2);
//                 return;
//             }

//             console.log(`Nome: ${usuario.nome},\nEndereco: ${endereco.rua},\nTelefone: ${telefone.ddd}${telefone.telefone}`)
//         })
//     })
// })

// const usuario = obterUsuario()
// const telefone = obterTelefone(usuario.id)

// console.log("usuario", usuario)
// console.log("Telefone:", telefone)