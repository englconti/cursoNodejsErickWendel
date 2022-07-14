const EventEmitter = require('events');
class MeuEmissor extends EventEmitter {
}
const meuEmissor = new MeuEmissor();
const nomeDoEvento = 'user:click';

meuEmissor.on(nomeDoEvento, function(click) {
    console.log('Um usuário clicou', click);
})

meuEmissor.emit(nomeDoEvento, "no botão");

let counter = 1;
setInterval(function(click) {
    meuEmissor.emit(nomeDoEvento, `no botão ${++counter}`);
}, 5000);

// Reading from terminal and making actions
const stdin = process.openStdin()

// stdin.addListener('data', function(value) {
//     console.log(`Você digitou: ${value.toString().trim()}`);
// })

function main() {
    return new Promise(function(resolve, reject) {
        stdin.addListener('data', function(value) {
            // console.log(`Você digitou: ${value.toString().trim()}`);
            return resolve(value);
        })
    })
}

// Como é uma Promise, só resolve uma vez
main().then(function(result) {
    console.log("Você digitou: ", result.toString());
})