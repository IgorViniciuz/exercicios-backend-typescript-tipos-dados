const etiquetarAutomatizado = (produto: { produto: string, lote: number, ano: number, qtd: number }): string[] => {
    const etiqueta: string[] = []

    for (let index = 1; index <= produto.qtd; index++) {
        etiqueta.push(`${produto.lote}-${produto.ano}-${index.toString().padStart(3, '0')}`)

    }

    return etiqueta

}

const produtoCadastrado: { produto: string, lote: number, ano: number, qtd: number } = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}

console.log(etiquetarAutomatizado(produtoCadastrado));