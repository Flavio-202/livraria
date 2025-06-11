import readlinesync = require ("readline-sync");
import { colors } from "./util/Colors"; 
import { Livro } from './model/Livro'
import {Academico} from './model/Academico';
import { Literatura } from "./model/Literatura";


    // Colocar todos os tributos das classes: Livro
    let titulo, autor, editora, anoPublicacao, tipo, materia, genero;
    let sair: boolean = true;
    let lista = new Array ();
    let novoLivro: Livro; //Nessa etapa eu estou atribuindo a variavel novoLivrodentro da classe Livro.

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
 console.log (colors.fg.yellow); 
 console.log (`

    Cadastar novo livro
______________________________

    Informe o tipo do livro:
______________________________
    1 = Livro acadêmico  
    2 = Livro de literatura
    `);

 console.log (colors.reset);

tipo = readlinesync.questionInt ("");
titulo = readlinesync.question ("Digite o nome do livro: ");
autor = readlinesync.question("Digite o nome do autor: ");
editora = readlinesync.question("Informe a editora: ");
anoPublicacao = readlinesync.questionInt("Informe o ano de publicacao: ");

    
    if (tipo === 1){

     materia = readlinesync.question("Informe a materia do livro:");
     novoLivro = new Academico (titulo, autor, editora, anoPublicacao, tipo, materia); // Aqui eu coloquei todos os atributos da classe Academico. Vou atribuir os valores na variavel novoLivro.
     
    }else {

     genero = readlinesync.question("Informe o genero do livro: ");
     novoLivro = new Literatura (titulo, autor, editora, anoPublicacao, tipo, genero); // Aqui eu coloquei todos os atributos da classe Literatura.Vou atribuir os valores na variavel novoLivro.
    }

    lista.push (novoLivro); // Nessa parte eu estou colocando na lista um dos dois: novoLivro Literatura ou novoLivro Academico.
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


