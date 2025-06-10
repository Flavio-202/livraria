import readlinesync = require ("readline-sync");
import { colors } from "./util/Colors"; 

console.log (colors.fg.yellow);
console.log (`
_________________________________________________

        Livraria - Parágrafo Livre.
_________________________________________________

    1 - Listar todos os livros disponíveis.
    2 - Cadastrar livro no sistema.
    3 - Retirar livro.
    4 - Consultar preço de algum livro.
    5 - Sair.
_________________________________________________

    `);
console.log (colors.reset);

console.log ("Selecione uma das opções: ");
let opcao = readlinesync.questionInt (" ");

switch (opcao){

    case 1:
console.log ("Lista de todos os livros disponíveis");
break;

    case 2:
console.log ("Digite o nome do livro");

console.log ("Digite o nome do autor");

console.log ("Informe o gênero do livro");

break;

    case 3:
console.log ("Informe o nome do livro");
break;

    case 4:
console.log ("Informe o nome do livro para consulta");
break;

    case 5: 
console.log ("O sistema foi encerrado com sucesso!");  
break;

default:
console.log (colors.fg.redstrong , "Opção inválida!", colors.reset);
break;

}



