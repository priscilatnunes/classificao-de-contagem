var dupla = window.prompt("Digite a quantidade de pessoas para o Baile")
for (let contador = 0; contador <= dupla; contador = contador + 1) {
    if (contador % 2 == 0 && contador != 0){
       console.log(contador + "    Autorizado - Bem Vindo ao Baile!")
    } else if  (contador % 2 != 0) {
       console.log(contador + "    Não autorizado - Infelizmente não poderá entrar no Baile!")
    } else { 
       console.log(contador + '\t numero "ZERO" ')
    }
}