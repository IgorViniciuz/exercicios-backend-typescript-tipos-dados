const soletrando = (palavra: string) => {
    return palavra.split('').join('-')
}

const palavra: string = 'programador';

console.log(soletrando(palavra))