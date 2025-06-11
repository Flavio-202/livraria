
// Essa é a classe ACADÊMICOS que vai ser criada a partir da classe Livro.
// Ela precisa ter o tributo: materia (Matematica, Historia, Contabilidade, Direito...)


import { Livro } from "./Livro";

export class Academico extends Livro {
    private _materia: string;

    constructor(titulo: string, autor: string, editora: string, anoPublicacao: number, tipo: number, materia: string) {

        super (titulo, autor, editora, anoPublicacao, tipo); // Aqui são os atributos já existentes da classe Livro

        this._materia = materia; //Aqui estou incluindo um atributo, além dos já existentes
    }


public get materia (){
    return this._materia;
}

public set materia (materia: string){
    this._materia = materia;

}

}