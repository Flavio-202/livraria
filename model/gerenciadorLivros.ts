import readlinesync from "readline-sync";

// Aqui estou puxando todas as informações das outras classes.
import { Livro } from "./Livro";
import { Funcoes } from "../interface/Funcoes"; // interface
import { Literatura } from "./Literatura";
import { Academico } from "./Academico";


// Nessa parte eu estou criando uma classe a partir da interface funcoes.
// O código é diferente quando são classes: export class Literatura extends Livro, no caso de classes vamos usar o extends e não o implements.

export class gerenciadorLivros implements Funcoes {

    private lista: Livro[] = []; // Aqui é onde eu salvo os livros cadastrados, minha lista



    // MÉTODO LISTARLIVROS DA INTREFACE FUNCOES.
    public listarlivros(): void {
        if (this.lista.length === 0) {
            console.log("Não tem nenhum livro disponível!");
        } else {
            for (let livro of this.lista) { // Essa função está pegando os livros da lista para exibir para o usuario.
                livro.visualizar(); // Aqui ele mostra a lista inteira
            }
        }
    }


    


   // MÉTODO CADASTRARLIVRO DA INTERFACE FUNCOES.
    public cadastrarlivro(): void {
        let tipo = readlinesync.questionInt("Tipo do livro - (1=Academico / 2=Literatura): ");
        let titulo = readlinesync.question("Titulo: ").toLowerCase();
        let autor = readlinesync.question("Autor: ").toLowerCase();
        let editora = readlinesync.question("Editora: ").toLowerCase();
        let anoPublicacao = readlinesync.questionInt("Ano de publicaçao: ");

        let novoLivro: Livro; // Nessa etapa eu estou atribuindo a variável novoLivro dentro da classe Livro.

        if (tipo === 1) {
            let materia = readlinesync.question("Materia: ").toLowerCase();
            novoLivro = new Academico(titulo, autor, editora, anoPublicacao, tipo, materia); // Aqui eu coloquei todos os atributos da classe Academico. Vou atribuir os valores na variável novoLivro.

        } else {
            let genero = readlinesync.question("Genero: ").toLowerCase();
            novoLivro = new Literatura(titulo, autor, editora, anoPublicacao, tipo, genero); // Aqui eu coloquei todos os atributos da classe Literatura. Vou atribuir os valores na variável novoLivro.
        }

        this.lista.push(novoLivro); // Nessa parte eu estou colocando na lista um dos dois: novoLivro Literatura ou novoLivro Acadêmico.
        console.log("Livro adicionado!");
        novoLivro.visualizar(); // Mostra o livro que foi adicionado
    }





    //MÉTODO PEGARLIVRO DA INTERFACE FUNCOES.
    public pegarlivro(): void {
        const pegarLivro = readlinesync.question("Digite o nome do livro: ").toLowerCase();
        let encontrado = false;

        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].titulo.toLowerCase() === pegarLivro) {
                this.lista[i].visualizar(); // Mostra para o usuário o livro escolhido
                this.lista.splice(i, 1); // Remove o livro da lista
                console.log("Livro removido com sucesso!");
                encontrado = true;
                break;
            }
        }

        if (!encontrado) {
            console.log("Livro não encontrado.");
        }
    }



    // MÉTODO DELETARLIVRO DA INTERFACE FUNCOES.
    public deletarlivro(): void {
        
    }
}

