const filtrarUsuarios = (lista: { nome: string, idade: number, status: boolean }[],
    busca: string): {
        nome: string,
        idade: number,
        status: boolean
    }[] => {

    const resultadoBusca = lista.filter((usuarioLista) => {
        return usuarioLista.nome.toLowerCase().includes(busca.toLowerCase());
    });

    return resultadoBusca
}

const listaUsuarios: { nome: string, idade: number, status: boolean }[] = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

console.log(filtrarUsuarios(listaUsuarios, 'Z'));