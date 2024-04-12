// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100 = Lendário
// Se vitórias for maior ou igual a 101 = Imortal


function ranking(vitoria , derrota){
    if( vitoria - derrota <= 10){
        return `O heroi tem o saldo de ${ vitoria - derrota} vitorias e esta no nivel FERRO`
    }else if( vitoria - derrota <= 20){
        return `O heroi tem o saldo de ${ vitoria - derrota} vitorias e esta no nivel Bronze`
    }
    else if( vitoria - derrota <= 50){
        return `O heroi tem o saldo de ${ vitoria - derrota} vitorias e esta no nivel Prata`
    }
    else if( vitoria - derrota <= 80){
        return `O heroi tem o saldo de ${ vitoria - derrota} vitorias e esta no nivel Ouro`
    }
    else if( vitoria - derrota <= 90){
        return `O heroi tem o saldo de ${ vitoria - derrota} vitorias e esta no nivel Diamante`
    }
    else if( vitoria - derrota <= 100){
        return `O heroi tem o saldo de ${ vitoria - derrota} vitorias e esta no nivel Lendario`
    }
    else if( vitoria - derrota > 101){
        return `O heroi tem o saldo de ${ vitoria - derrota} vitorias e esta no nivel Imortal`
    }
   
}
console.log(ranking(100, 30));
