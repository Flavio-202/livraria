import readlinesync = require ("readline-sync");
import { colors } from "./util/Colors"; 
import { Livro } from './model/Livro'


    // Colocar todos os tributos das classes: Livro
    let titulo, genero, autor, editora, anoPublicacao, tipo;
    let sair: boolean = true;

do {
console.log (colors.fg.yellow);
console.log (`
_________________________________________________

        Livraria - Parágrafo Livre.
_________________________________________________

    1 - Listar todos os livros disponíveis.
    2 - Cadastrar livro no sistema.
    3 - Comprar livro.
    4 - Consultar preço de algum livro.
    5 - Retirar um livro.
    6 - Sair.
_________________________________________________

    `);
console.log (colors.reset);

console.log ("Selecione uma das opções: ");
let opcao = readlinesync.questionInt ("");

switch(opcao){

    case 1:
console.log ("Lista de todos os livros disponíveis");
break;

    case 2:
console.log (colors.fg.yellow,"\n\nCadastrar novo livro\n\n", colors.reset);

titulo = readlinesync.question ("Digite o nome do livro: "); 

console.log (`
____________________________
    Informe o tipo do livro:
____________________________
    1 = Acadêmico  
    2 = Literatura
    `);
tipo = readlinesync.questionInt ("");
autor = readlinesync.question("Digite o nome do autor: ");
genero = readlinesync.question("Informe o genero do livro: ");
editora = readlinesync.question("Informe a editora: ");
anoPublicacao = readlinesync.questionInt("Informe o ano de publicação: ");

// Aqui eu estou colhendo as informações para criar a minha lista. 
const novoLivro = new Livro(titulo, genero, autor, editora, anoPublicacao, tipo);

novoLivro.visualizar();
break;

    case 3:
console.log ("Informe o nome do livro");
break;

    case 4:
console.log ("Informe o nome do livro para consulta");
break;

    case 5:   
break;
     
    case 6: 
    console.log ("O sistema foi encerrado com sucesso!");
break;

default:
console.log (colors.fg.redstrong , "Opção inválida!", colors.reset);
sair = false;
break;

}
} while (sair === true)

