
// Essa é a classe LITERATURA que vai ser criada a partir da classe Livro.
// Ela precisa ter o tributo: genero (Drama, terror, comédia...)

import { Livro } from "./Livro";

export class Literatura extends Livro {

    private _genero: string;

    constructor (titulo: string, autor: string, editora: string, anoPublicacao: number, tipo:number, genero: string){

    super (titulo, autor, editora, anoPublicacao, tipo); // Aqui eu coloco atributos que existem na classe Livro

    this._genero = genero; // Aqui é o novo atributo

    }


    // get e set: genero
    public get genero (){
        return this._genero;
    }

    public set genero (genero: string){
        this._genero = genero;
    }

    // Aqui é a implementação do metodo visualizar, vai ter outro também na classe Academico, mas com o atributo (materia)

    public visualizar(): void {
    console.log(`
-------------------------------------
        Livro de literatura
-------------------------------------
 Título: ${this.titulo}
 Autor: ${this.autor}
 Editora: ${this.editora}
 Ano: ${this.anoPublicacao}
 genero do livro: ${this.genero}
-------------------------------------
    `);
  }

}

