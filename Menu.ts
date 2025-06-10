import readlinesync = require ("readline-sync");
import { colors } from "./util/Colors"; 
import { Livro } from './model/Livro'
import {Academico} from './model/Academico';


    // Colocar todos os tributos das classes: Livro
    let titulo, genero, autor, editora, anoPublicacao, tipo, materia;
    let sair: boolean = true;
    let lista = new Array ();

do {
console.log (colors.fg.yellow);
console.log (`
_________________________________________________

        Livraria - Parágrafo Livre.
_________________________________________________

    1 - Listar todos os livros disponíveis.
    2 - Cadastrar livro no sistema.
    3 - Pegar livro emprestado.
    4 - Sair.
_________________________________________________

    `);
console.log (colors.reset);

console.log ("Selecione uma das opções: ");
let opcao = readlinesync.questionInt ("");

switch(opcao){
    case 1:
        if (lista.length === 0){
            console.log ("Não tem nenhum livro disponivel!");
        } else {
        
        }
    break;


    case 2:
console.log (colors.fg.yellow,"\n\nCadastrar novo livro\n\n", colors.reset); 

console.log (`
______________________________

    Informe o tipo do livro:
______________________________
    1 = Livro acadêmico  
    2 = Livro de literatura
    `);
tipo = readlinesync.questionInt ("");
titulo = readlinesync.question ("Digite o nome do livro: ");
autor = readlinesync.question("Digite o nome do autor: ");
editora = readlinesync.question("Informe a editora: ");
anoPublicacao = readlinesync.questionInt("Informe o ano de publicacao: ");
genero = readlinesync.question("Informe o genero do livro: ");
materia = readlinesync.question("Informe a matéria do livro: ");

const novoLivro = new Academico (titulo, autor, genero, editora, anoPublicacao, tipo, materia);
lista.push(novoLivro);
    break;


    case 3:
console.log ("Informe o nome do livro");
    break;
    

    case 4: 
    console.log ("O sistema foi encerrado com sucesso!");
    sair = false;
    break;



    default:
    console.log (colors.fg.redstrong , "Opção inválida!", colors.reset);
    break;

}
} while (sair === true)


