import descas from "../../assets/descasa.jpg"
import nute from "../../assets/nutella.jpg"
import carn from "../../assets/carne.jpg"
import pres from "../../assets/prestigio.jpg"

const casa = [
    {
        id: 1,
        nome: "Pizza da Casa",
        descricao: "Receita especial com ingredientes selecionados.",
        preco: "R$ 55,00",
        categoria: "salgada",
        imagem: descas,
        destaque: true,
    },
    {
        id: 2,
        nome: "Pizza Nutella",
        descricao: "Nutella cremosa com açúcar de confeiteiro.",
        preco: "R$ 45,00",
        categoria: "doce",
        imagem: nute,
        destaque: true,
    },
    {
        id: 3,
        nome: "Pizza de Carne",
        descricao: "Pizza de carne com tomate.",
        preco: "R$ 53,00",
        categoria: "salgada",
        imagem: carn,
        destaque: true,
    },
    {
        id: 4,
        nome: "Pizza Prestigio",
        descricao: "Prestigio com chocolate.",
        preco: "R$ 42,00",
        categoria: "doce",
        imagem: pres,
        destaque: true,
    },
]

export default casa;