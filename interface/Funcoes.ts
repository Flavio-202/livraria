import {Livro} from '../model/Livro';

// INTERFACE FUNCOES:


// métodos da interface.
export interface Funcoes {

	listarlivros(): void;
	cadastrarlivro (): void;
	pegarlivro (): void;
	deletarlivro (): void;
}

// AGORA ESSES QUATRO MÉTODOS DEVEM ESTAR NA CLASSE GERENCIADORLIVROS, PORQUE A CLASSE GERENCIADORLIVROS FOI CRIADA A PARTIR DESSA INTERFACE.

/*

export class gerenciadorLivros implements Funcoes {

Aqui dentro vai todas as interfaces, ex:

listarlivros(): void {} -> Dentro de cada chave vai a função que esse método precisa executar.
cadastrarlivro(): void {} ->
pegarlivro(): void {} ->
deletarlivro(): void {} ->

}


*/