import readlinesync = require ("readline-sync");
import { colors } from "./util/Colors"; 
import { gerenciadorLivros } from '../src/model/gerenciadorLivros'; // Nessa etapa eu estou puxando todas as classes e intrefaces que estão ligadas no gerenciadorLivros



   const gerenciador = new gerenciadorLivros();
   let sair = true;

do {
console.log (colors.fg.yellow);
console.log (`
_________________________________________________

        Livraria - Parágrafo Livre.
_________________________________________________

    1 - Listar todos os livros disponíveis.
    2 - Cadastrar livro no sistema.
    3 - Pegar livro.
    4 - Sair.
_________________________________________________

    `);
console.log (colors.reset);


console.log ("Selecione uma das opções: ");
let opcao = readlinesync.questionInt ("");

switch(opcao){

    case 1:
        gerenciador.listarlivros(); // Aqui estou puxando o método: public listarlivros(): void {}
    break;


    case 2:
        gerenciador.cadastrarlivro(); // Aqui estou puxando o metodo: public cadastrarlivro(): void {} 
    break;


    case 3:
        gerenciador.pegarlivro(); // Aqui estou puxando o método: public pegarlivro(): void {} 
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


