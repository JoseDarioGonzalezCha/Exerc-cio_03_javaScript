function pessoa() {

    let pessoa = {
      nome: prompt('Escreva seu nome'),
      idade: prompt('Escreva sua idade'),
      corFavorita: prompt('Escreva a sua cor favorita')
    };
    return pessoa;
  }

  
  let listPessoas = [];
  do {
    listPessoas.push(pessoa());
  }
  while (prompt("Deseja adicionar outra pessoa? s/n") != "n");
  
  console.table(listPessoas);
  
 
  function numPessoas() {

    totalPessoas = listPessoas.length;
  
    return totalPessoas;
  
  }
  
  console.log (`Total ${numPessoas()} pessoas na lista`);