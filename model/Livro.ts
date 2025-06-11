
// Essa é a minha classe principal, ela vai ser o molde para a classe Literatura e Academico
// Todo livro dever ter: 
// título, autor, editora, ano de publicação
// genero (Literatura) e materia (Academico) 
// tipo vai ser 1= Academico ou 2= Literatura

export abstract class Livro {

    //Atributos:
    private _titulo: string;
    private _autor: string;
    private _editora: string;
    private _anoPublicacao: number;
    private _tipo: number;

    constructor (titulo: string, autor: string, editora: string, anoPublicacao: number, tipo:number){
        
        this._titulo = titulo;
        this._autor = autor;
        this._editora = editora;
        this._anoPublicacao = anoPublicacao;
        this._tipo = tipo;
    }

// get e set: titulo
    public get titulo (){
        return this._titulo;
    }

    public set titulo (titulo: string) {
        this._titulo = titulo;
    }


// get e set: autor
    public get autor (){
        return this._autor;
    }

    public set autor (autor: string){
        this._autor = autor;
    }


// get e set: editora
    public get editora (){
        return this._editora;
    }

    public set editora (editora: string){
        this._editora = editora;
    }


// get e set: anoPublicacao
    public get anoPublicacao (){
        return this._anoPublicacao;
    }

    public set anoPublicacao (anoPublicacao: number){
        this._anoPublicacao = anoPublicacao
    }

// get e set: tipo
    public get tipo (){
        return this._tipo;
    }

    public set tipo (tipo: number){
        this._tipo = tipo;
    }

// O comando public visualizar() serve para acessar em outra classe o conteúdo que esta dentro das chaves

    public visualizar (): void {
        
        let tipoLivro: string = "";

    switch (this._tipo){
        case 1:
            tipoLivro = "Literatura"
            break;

        case 2:
            tipoLivro = "Acadêmico"
            break;

        default:
            console.log ("Desconhecido!");
            break;
    }


    console.log (`
___________________________________________

             Livro
___________________________________________

    título: ${this._titulo}
    tipo do livro: ${tipoLivro}
    Autor(a): ${this._autor}
    Editora: ${this._editora}
    Ano de Publicação: ${this._anoPublicacao}
____________________________________________
        `);

    }
}