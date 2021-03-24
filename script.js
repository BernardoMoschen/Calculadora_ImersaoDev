operação = parseInt(prompt("Qual operação você deseja realizar ?\n->Digite 1 para adição.\n->Digite 2 para subtração.\n->Digite 3 para multiplicação.\n->Digite 4 para divisão.\n->Digite 5 para exponenciação.\n->Digite 6 para a porcentagem.\n->Clique em 'Cancelar' ou digite '7' para sair."))
  
  primeiroValor = parseFloat(prompt("Digite o primeiro valor: "))
  segundoValor = parseFloat(prompt("Digite o segundo valor: "))
  
switch (operação) {
  case 1:
    resultado = primeiroValor + segundoValor
    document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
    break;
    case 2:
    resultado = primeiroValor - segundoValor
    document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
    break;
    case 3:
    resultado = primeiroValor * segundoValor
    document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
    break;
    case 4:
    resultado = primeiroValor / segundoValor
    document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
    break;
    case 5:
    resultado = primeiroValor ** segundoValor
    document.write("<h2>" + primeiroValor + "**"  + segundoValor + " = " + resultado + "</h2>")
    break;
    case 6:
    resultado = primeiroValor * segundoValor / 100
    document.write("<h2>" + primeiroValor +"%" +  " de " + segundoValor + " = " + resultado + "</h2>")
    break;
  case 7:
    document.write("<h2>" + "Você saiu." + "</h2>")
    break;
  default:
    document.write("<h2>" + "Error" + "</h2>");
    alert("Você digitou algum valor inválido. \nPor favor, tente novamente.")
}
