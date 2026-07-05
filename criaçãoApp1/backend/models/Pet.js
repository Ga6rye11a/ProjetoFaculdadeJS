export class Pet {
    constructor({ id, nome, especie, status }) {
        this.id = id;
        this.nome = nome;
        this.especie = especie;
        this.status = status || 'DISPONIVEL';
    }
}