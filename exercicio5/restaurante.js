function Restaurante(nome,cardapio) {
    this.nome = nome;
    this.cardapio = cardapio;
    this.entrada = function(){
        let ultimo = this.cardapio.pop()
        return`Bem-vindo ao Restaurante ${this.nome}, o cardapio de hoje é ${this.cardapio} e ${ultimo}` 
    }
}
 let restaurante = new Restaurante("Bom sabor", [" Batata frita", " Arroz", " Pizza",])


 console.log(restaurante.entrada())