export class PetResponseDTO {
    constructor(pet) {
        this.id = pet.id;
        this.nome = pet.nome;
        this.especie = pet.especie;
        // Ocultamos detalhes internos de adoção, devolvendo apenas a contagem.
        this.totalInteressados = pet.adocoes ? pet.adocoes.length : 0;
    }

    // Método utilitário para converter listas
    static converterLista(pets) {
        return pets.map(pet => new PetResponseDTO(pet));
    }
}