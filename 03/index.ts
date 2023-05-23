const arrayExemplo: number[] = [1, 2, 3, 4, 5];

const tabuada = (array: number[]) => {

    for (let item of array) {
        let multiplicador = item;
        for (let numero2: number = 0; numero2 <= 10; numero2++) {
            let valor = numero2 * multiplicador


            console.log(multiplicador, "x", numero2, "=", valor);



        }
        console.log("---------------")
    }



}

tabuada(arrayExemplo);