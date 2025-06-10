import { Livro } from "./Livro";

export class Academico extends Livro {
    private _materia: string;

    constructor(titulo: string, genero: string, autor: string, editora: string, anoPublicacao: number, tipo: number, materia: string) {

        super (titulo, genero, autor, editora, anoPublicacao, tipo); // Aqui são os atributos já existentes da classe Livro

        this._materia = materia; //Aqui estou incluindo um atributo, além dos já existentes
    }


public get materia (){
    return this._materia;
}

public set materia (materia: string){
    this._materia = materia;

}

}