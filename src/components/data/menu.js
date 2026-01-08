import marghe from "../../assets/margherita.jpg"
import calabresa from "../../assets/calabresa.jpg"
import portu from "../../assets/portuguesa.jpg"
import frango from "../../assets/frango.jpg"
import queijo from "../../assets/queijo.jpg"
import peppe from "../../assets/pepperoni.jpg"
import choco from "../../assets/chocolate.jpg"
import morango from "../../assets/morango.jpg"
import banana from "../../assets/banana.jpg"
import romeu from "../../assets/romeu.jpg"
import refri from "../../assets/refri.jpg"
import suco from "../../assets/suco.jpg"
import agua from "../../assets/agua.jpg"
import cha from "../../assets/cha.jpg"
import descas from "../../assets/descasa.jpg"
import nute from "../../assets/nutella.jpg"


const menu = [
    // pizzas salgadas
    {
        id: 1,
        nome: "Margherita",
        descricao: "Molho de tomate, muçarela, manjerição fresco e azeite.",
        preco: "R$ 45,00",
        categoria: "salgada",
        imagem: marghe,
    },
    {
        id: 2,
        nome: "Calabresa",
        descricao: "Calabresa fatiada, cebola roxa, muçarela e orégano.",
        preco: "R$ 47,00",
        categoria: "salgada",
        imagem: calabresa,
    },
    {
        id: 3,
        nome: "Portuguesa",
        descricao: "Presunto, ovos, cebola, pimentão, azeitonas e muçarela.",
        preco: "R$ 49,00",
        categoria: "salgada",
        imagem: portu,
    },
    {
        id: 4,
        nome: "Frango com Catupiry",
        descricao: "Frango desfiado temperado com catupiry cremoso.",
        preco: "R$ 50,00",
        categoria: "salgada",
        imagem: frango,
    },
    {
        id: 5,
        nome: "Quatro Queijos",
        descricao: "Muçarela, parmesão, provolone e gorgonzola.",
        preco: "R$ 52,00",
        categoria: "salgada",
        imagem: queijo,
    },
    {
        id: 6,
        nome: "Pepperoni",
        descricao: "Pepperoni crocante, muçarela e molho especial.",
        preco: "R$ 53,00",
        categoria: "salgada",
        imagem: peppe,
    },

    // pizzas doces
    {
        id: 7,
        nome: "Chocalate",
        descricao: "Chocolate ao leite derretido com mucarela.",
        preco: "R$ 39,00",
        categoria: "doce",
        imagem: choco,
    },
    {
        id: 8,
        nome: "Chocolate com Morango",
        descricao: "Chocolate ao leite com morangos frescoa.",
        preco: "R$ 42,00",
        categoria: "doce",
        imagem: morango,
    },
    {
        id: 9,
        nome: "Banana com Canela",
        descricao: "Banana caramelizada com açúcar e canela.",
        preco: "R$ 38,00",
        categoria: "doce",
        imagem: banana,
    },
    {
        id: 10,
        nome: "Romeu e Julieta",
        descricao: "Goiabada cremosa com muçarela derretida.",
        preco: "R$ 40,00",
        categoria: "doce",
        imagem: romeu,
    },

    // bebidas
    {
        id: 11,
        nome: "Refrigerante",
        descricao: "Lata 350ml - sabores variados.",
        preco: "R$ 8,00",
        categoria: "bebida",
        imagem: refri,
    },
    {
        id: 12,
        nome: "Suco Natural",
        descricao: "Suco natural da fruta (laranja, limão ou abacaxi).",
        preco: "R$ 10,00",
        categoria: "bebida",
        imagem: suco,
    },
    {
        id: 13,
        nome: "Água Mineral",
        descricao: "Água mineral sem gás 500ml.",
        preco: "R$ 5,00",
        categoria: "bebida",
        imagem: agua,
    },
    {
        id: 14,
        nome: "Chá Gelado",
        descricao: "Chá gelado de péssego ou limão.",
        preco: "R$ 9,00",
        categoria: "bebida",
        imagem: cha,
    },

    // extras / destaques
    {
        id: 15,
        nome: "Pizza da Casa",
        descricao: "Receita especial com ingredientes selecionados.",
        preco: "R$ 55,00",
        categoria: "salgada",
        imagem: descas,
        destaque: true,
    },
    {
        id: 16,
        nome: "Pizza Nutella",
        descricao: "Nutella cremosa com açúcar de confeiteiro.",
        preco: "R$ 45,00",
        categoria: "doce",
        imagem: nute,
        destaque: true,
    },
]

export default menu